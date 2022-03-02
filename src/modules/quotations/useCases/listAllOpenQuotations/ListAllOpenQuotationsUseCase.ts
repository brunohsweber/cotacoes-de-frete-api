import { prisma } from "../../../../database/prismaClient"

export class ListAllOpenQuotationsUseCase {
  async execute() {
    return await prisma.quotations.findMany({
      where: {
        has_paid: false,
        has_confirmed: true
      }
    })
  }
}
