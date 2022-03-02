import { prisma } from "../../../../database/prismaClient"

export class ShowDetailsQuotationUseCase {
  async execute(id: string) {
    const quotationExists = await prisma.quotations.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    })

    if (!quotationExists) {
      throw new Error("Quotation does not exist!")
    }

    if (quotationExists) {
      const result = await prisma.quotations.findUnique({
        where: {
          id: id
        }
      })

      return result
    }

  }
}