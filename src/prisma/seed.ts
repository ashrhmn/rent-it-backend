/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";

const prisma = new PrismaClient();

async function seedUser() {
  await prisma.users.createMany({
    data: [
      {
        username: "ash",
        password: await hash("ash"),
        email: "ash@email.com",
        permissions: ["CREATE_USER", "MODIFY_USER"],
        date_of_birth: Math.round(new Date("1990-01-01").valueOf() / 1000),
      },
      {
        username: "dev",
        password: await hash("dev"),
        email: "dev@email.com",
        permissions: ["CREATE_USER"],
        date_of_birth: Math.round(new Date("1990-01-01").valueOf() / 1000),
      },
      {
        username: "admin",
        password: await hash("admin"),
        email: "admin@email.com",
        permissions: ["MODIFY_USER"],
        date_of_birth: Math.round(new Date("1990-01-01").valueOf() / 1000),
      },
    ],
    skipDuplicates: true,
  });
}

async function main() {
  await seedUser();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });