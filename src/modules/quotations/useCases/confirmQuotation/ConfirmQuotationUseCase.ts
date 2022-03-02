import { prisma } from "../../../../database/prismaClient"
import { ICreateQuotationDTO } from "../../dtos/ICreateQuotationDTO"

export class ConfirmQuotationUseCase {
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

    // se a cotação já foi confirmada, não pode ser re-confirmada
    if (quotationConfirmed) {
      throw new Error("Quotation already confirmed!")
    }

    if (!quotationConfirmed) {
      const quotation = await prisma.quotations.update({
        data: {
          has_confirmed: true,
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
