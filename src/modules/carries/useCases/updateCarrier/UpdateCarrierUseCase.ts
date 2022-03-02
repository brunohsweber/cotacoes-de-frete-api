import { prisma } from "../../../../database/prismaClient"

interface IUpdateCarrier {
  id: string;
  name: string;
  cnpj: string;
}

export class UpdateCarrierUseCase {
  async execute({ id, name, cnpj }: IUpdateCarrier) {
    const carrierExists = await prisma.carries.findFirst({
      where: {
        id: {
          equals: id,
          mode: "insensitive"
        }
      }
    })

    if (!carrierExists) {
      throw new Error("Carrier does not exist!")
    }

    const result = await prisma.carries.update({
      where: {
        id
      },
      data: {
        name,
        cnpj
      }
    })

    return result
  }
}

