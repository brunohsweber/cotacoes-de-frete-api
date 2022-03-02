import { prisma } from "../../../../database/prismaClient"

export class PayQuotationUseCase {
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

    // se a cotação já foi paga, não pode ser paga novamente
    if (quotationPaid) {
      throw new Error("Quotation already paid!")
    }

    if (!quotationPaid) {

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

      if (!quotationConfirmed) {
        throw new Error("Quotation not confirmed!")
      }

      if (quotationConfirmed) {
        const quotation = await prisma.quotations.update({
          data: {
            has_paid: true,
            updated_at: new Date()
          },
          where: {
            id
          }
        })

        return quotation
      }


    }
  }
}
