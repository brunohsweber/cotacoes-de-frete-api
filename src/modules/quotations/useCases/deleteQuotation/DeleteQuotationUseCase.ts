import { prisma } from "../../../../database/prismaClient"

export class DeleteQuotationUseCase {
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

    // verifica se a cotação já foi paga na tabela quotations
    const quotationPaid = await prisma.quotations.findFirst({
      where: {
        id: {
          equals: id
        },
        has_paid: {
          equals: true
        }
      }
    })

    // se a cotação já foi paga, não pode ser deletada
    if (quotationPaid) {
      throw new Error("Quotation already paid!")
    }

    // verifica se a cotação já foi confirmada na tabela quotations
    const quotationConfirmed = await prisma.quotations.findFirst({
      where: {
        id: {
          equals: id
        },
        has_confirmed: {
          equals: true
        }
      }
    })

    // se a cotação já foi confirmada, não pode ser deletada
    if (quotationConfirmed) {
      throw new Error("Quotation already confirmed!")
    }

    if (!quotationConfirmed && !quotationPaid) {
      await prisma.quotations.delete({
        where: {
          id
        }
      })

      return
    }


  }
}
