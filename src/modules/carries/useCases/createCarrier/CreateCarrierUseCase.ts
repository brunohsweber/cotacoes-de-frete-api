import { prisma } from "../../../../database/prismaClient";

interface ICreateCarrier {
  name: string;
  cnpj: string
}

export class CreateCarrierUseCase {
  async execute({ name, cnpj }: ICreateCarrier) {

    const carrierExists = await prisma.carries.findFirst({
      where: {
        cnpj: {
          equals: cnpj,
          mode: "insensitive"
        }
      }
    })

    if (carrierExists) {
      throw new Error("Carrier already exists!")
    }

    const carrier = await prisma.carries.create({
      data: {
        name,
        cnpj
      }
    })

    return carrier
  }
}