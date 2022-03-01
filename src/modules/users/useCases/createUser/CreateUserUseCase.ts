import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
  username: string;
  password: string
}

export class CreateUserUseCase {
  async execute({ username, password }: ICreateUser) {
    const isConnect = await prisma.$connect()

    console.log(isConnect)

    const userExists = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (userExists) {
      throw new Error("Client already exists!")
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.users.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return user
  }
}