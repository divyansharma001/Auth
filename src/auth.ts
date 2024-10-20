import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcryptjs'
import { prisma } from "@/prisma" 

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password")
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
        })

        if (!user || !user.password) {
          throw new Error("Invalid credentials")
        }

        const isPasswordValid = await compare(credentials.password as string, user.password as string)

        if (!isPasswordValid) {
          throw new Error("Invalid credentials")
        }

        return {
          id: user.id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          address: user.address,
          phone: user.phone
        }
      },
    })
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/signin', 
    error: '/auth/error',  
  },
  
  callbacks : {
    signIn: async({ user, account}) => {
      if(account?.provider === 'google'){
      try {
        const {email, name, image, id} = user;

        const alreadyUser = await prisma.user.findUnique({
          where: {
            email: email ?? ''
          }
        })

        if(!alreadyUser){
          await prisma.user.create({
            data: {
              email: email ?? '',
              firstName: name ?? '',
              lastName: '', // Add a default or appropriate value for lastName
              password: '', // Add a default or hashed password
              image: image ?? " ",
              googleId: id ?? " "
            }
          })
        }

        return true;

      } catch (error) {
        console.error(error)
        // throw new AuthError('Error signing in with Google')
        return false; 
      }
    }

    return true;
  }
  },
  // debug: process.env.NODE_ENV === 'development',
})