// import { PrismaClient } from '@prisma/client';

const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient();

async function main() {
  try{
    await db.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Finance" },
        { name: "Photography" },
        { name: "Management" },
        { name: "Engineering" },
        { name: "Agriculture" },
      ]
    });

    console.log("Success")
  }catch(error){
    console.log("Error seeding database categories")
  } finally {
    await db.$disconnect();
  }
}

main();