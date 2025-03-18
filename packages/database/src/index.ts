import { PrismaClient } from '@prisma/client'



export const client = new PrismaClient()

// // Declare the global variable type
// declare global {
//   var prisma: PrismaClient | undefined;
//   // @ts-ignore
//   var process: any;
//   var global: typeof globalThis;
// }

// // For development, use the global instance
// // For production, use a new instance
// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined;
// };

// // Use the global instance in development to prevent multiple instances during hot reloading
// export const client =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     // Add output for debugging
//     log: ['query', 'error', 'warn'],
//   });

// // Set the global variable only in development
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client;
