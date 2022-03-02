import { Request, Response } from "express";
import { CreateCarrierUseCase } from "./CreateCarrierUseCase";

export class CreateCarrierController {
  async handle(request: Request, response: Response) {
    const { name, cnpj } = request.body

    const createCarrierUseCase = new CreateCarrierUseCase();

    const result = await createCarrierUseCase.execute({
      name,
      cnpj
    });

    return response.json(result)
  }
}
