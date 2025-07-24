const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("✅ Connected to MySQL via Prisma"))
  .catch((err) => console.error("❌ MySQL Connection Error:", err));
