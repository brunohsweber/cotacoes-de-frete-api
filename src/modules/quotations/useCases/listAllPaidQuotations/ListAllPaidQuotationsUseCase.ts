import { prisma } from "../../../../database/prismaClient"

export class ListAllPaidQuotationsUseCase {
  async execute() {
    return await prisma.quotations.findMany({
      where: {
        has_paid: true,
        has_confirmed: true
      }
    })
  }
}
