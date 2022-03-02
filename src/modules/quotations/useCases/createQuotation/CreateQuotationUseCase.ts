import { prisma } from "../../../../database/prismaClient";

interface ICreateQuotation {
  id_user: string;
  id_carrier: string;
  id_freight_type: string;
  sender_name: string;
  receiver_name: string;
  reference_doc: number;
  quotation_number: number;
  price: number;
  observations?: string | null;
  responsible: string;
  has_confirmed?: boolean | false;
  has_paid?: boolean | false;
}

export class CreateQuotationUseCase {
  async execute({ id_user, id_carrier, id_freight_type, sender_name, receiver_name, reference_doc, quotation_number, price, observations, responsible, has_confirmed, has_paid }: ICreateQuotation) {

    const quotationExists = await prisma.quotations.findFirst({
      where: {
        id_carrier: {
          equals: id_carrier
        },
        id_freight_type: {
          equals: id_freight_type
        },
        quotation_number: {
          equals: quotation_number
        },
        reference_doc: {
          equals: reference_doc
        }
      }
    })

    if (quotationExists) {
      throw new Error("Quotation already exists!")
    }

    try {
      const carrier = await prisma.quotations.create({
        data: {
          id_user,
          id_carrier,
          id_freight_type,
          sender_name,
          receiver_name,
          reference_doc,
          quotation_number,
          price,
          observations: observations ? observations : "",
          responsible,
          has_confirmed: has_confirmed ? has_confirmed : false,
          has_paid: has_paid ? has_paid : false
        }
      })

      return carrier
    } catch (error) {
      throw new Error("Houve um erro ao criar a cotação!")
    }


  }
}