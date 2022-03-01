import { prisma } from "../src/database/prismaClient";
import { freightTypes } from "./freightTypes";

async function main() {
  for (let freightType of freightTypes) {
    await prisma.freightType.create({ data: freightType });
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
