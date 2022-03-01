import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IAuthenticateUser {
  username: string;
  password: string
}

export class AuthenticateUserUseCase {
  async execute({ username, password }: IAuthenticateUser) {
    const client = await prisma.users.findFirst({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error("Username or password invalid!")
    }

    const token = sign({ username }, "da810830ccf26cc3fcfd19370bdb9c4b", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token

  }
}
