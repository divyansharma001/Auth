
# Next.js Authentication Project

This is a **Next.js** project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It comes with a complete authentication setup using **NextAuth.js**, **Prisma**, **Neon DB**, and more!

## 🛠️ **Technologies Used**
- **Next.js**
- **NextAuth.js**
- **Prisma**
- **Neon DB**
- **Zod**
- **Tailwind CSS**
- **Acertinity UI**
- **Shadcn**
- **Framer Motion**

## 🚀 **Getting Started**

### 1. **Clone the repository**
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. **Configure the Environment Variables**

Create a `.env` file in the root directory and add the necessary environment variables for NextAuth.js, Prisma, and your database connection. Here’s an example:

```
DATABASE_URL=your_neon_db_url
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. **Prisma Setup**

Generate the Prisma client and apply the migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

This will generate the Prisma client and run the initial database migrations.

### 5. **Run the Development Server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📚 **Learn More**

To learn more about the frameworks and technologies used in this project, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Prisma Documentation](https://www.prisma.io/docs/getting-started)

## 📦 **Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
