import { prisma } from "../../../../database/prismaClient"

export class ListAllQuotationsUseCase {
  async execute() {
    return await prisma.quotations.findMany()
  }
}
