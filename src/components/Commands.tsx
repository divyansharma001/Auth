"use client";
import { Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface CommandCopyProps {
    commands: string | string[];
    title?: string;
    containerClassName?: string;
}

export const CommandCopy = ({ 
  commands, 
  title = "Setup Commands",
  containerClassName = "" 
}: CommandCopyProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(Array.isArray(commands) ? commands.join(" && ") : commands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${containerClassName}`}
    >
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        
        {/* Main container */}
        <div className="relative bg-gray-900 rounded-lg p-1">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{title}</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
            >
              <Copy 
                size={14} 
                className={copied ? "text-green-500" : "text-gray-400"}
              />
              <span className={copied ? "text-green-500" : "text-gray-400"}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

          {/* Commands */}
          <pre className="p-4 font-mono text-sm overflow-x-auto text-gray-100">
            <code className="block">
              {Array.isArray(commands) ? (
                commands.map((cmd, index) => (
                  <div key={index} className="flex items-start mb-2 last:mb-0">
                    <span className="text-gray-500 select-none mr-2">$</span>
                    <span>{cmd}</span>
                  </div>
                ))
              ) : (
                <div className="flex items-start">
                  <span className="text-gray-500 select-none mr-2">$</span>
                  <span>{commands}</span>
                </div>
              )}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

// Example usage:
export const CommandCopyExample = () => {

  // Multiple commands example
  const multipleCommands = [
    "npx degit divyansharma001/Auth my-auth-app",
    "cd my-auth-app",
    "npm run setup"
  ];

  return (
    <div className="space-y-8 p-4 max-w-3xl mx-auto">
      
      
      {/* Multiple commands example */}
      <CommandCopy
        commands={multipleCommands}
        title="Setup New Project"
      />
    </div>
  );
};