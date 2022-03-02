import { Request, Response } from "express";
import { UpdateCarrierUseCase } from "./UpdateCarrierUseCase";

export class UpdateCarrierController {
  async handle(request: Request, response: Response) {
    const { name, cnpj } = request.body;
    const { id } = request.params

    const updateCarrierUseCase = new UpdateCarrierUseCase()

    const carrier = await updateCarrierUseCase.execute({
      id,
      name,
      cnpj
    })

    return response.json(carrier)

  }
}
