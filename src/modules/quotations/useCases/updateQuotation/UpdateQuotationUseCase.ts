import { prisma } from "../../../../database/prismaClient"
import { ICreateQuotationDTO } from "../../dtos/ICreateQuotationDTO"

export class UpdateQuotationUseCase {
  async execute({ ...data }: ICreateQuotationDTO) {

    const quotationExists = await prisma.quotations.findFirst({
      where: {
        id: {
          equals: data.id
        }
      }
    })

    if (!quotationExists) {
      throw new Error("Quotation does not exist!")
    }

    if (quotationExists) {
      // atualiza a cotação no banco de dados
      const quotation = await prisma.quotations.update({
        data: {
          id_carrier: data.id_carrier,
          id_freight_type: data.id_freight_type,
          sender_name: data.sender_name,
          receiver_name: data.receiver_name,
          reference_doc: data.reference_doc,
          quotation_number: data.quotation_number,
          price: data.price,
          observations: data.observations || "",
          responsible: data.responsible,
          has_confirmed: data.has_confirmed,
          has_paid: data.has_paid,
          updated_at: new Date()
        },
        where: {
          id: data.id
        }
      })

      return quotation
    }
  }
}
