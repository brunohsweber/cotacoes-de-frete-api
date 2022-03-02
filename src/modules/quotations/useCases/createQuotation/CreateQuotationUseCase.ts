import { prisma } from "../../../../database/prismaClient";
import { ICreateQuotationDTO } from "../../dtos/ICreateQuotationDTO";

export class CreateQuotationUseCase {
  async execute({ ...data }: ICreateQuotationDTO) {

    const quotationExists = await prisma.quotations.findFirst({
      where: {
        id_carrier: {
          equals: data.id_carrier
        },
        id_freight_type: {
          equals: data.id_freight_type
        },
        quotation_number: {
          equals: data.quotation_number
        },
        reference_doc: {
          equals: data.reference_doc
        }
      }
    })

    if (quotationExists) {
      throw new Error("Quotation already exists!")
    }

    try {
      const carrier = await prisma.quotations.create({
        data: {
          ...data,
          observations: data.observations || "",
          has_confirmed: false,
          has_paid: false
        }
      })

      return carrier
    } catch (error) {
      throw new Error("Houve um erro ao criar a cotação!")
    }


  }
}