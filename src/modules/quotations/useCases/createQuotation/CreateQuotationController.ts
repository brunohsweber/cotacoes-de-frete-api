import { Request, Response } from "express";
import { CreateQuotationUseCase } from "./CreateQuotationUseCase";

export class CreateQuotationController {
  async handle(request: Request, response: Response) {
    const { id_user } = request;
    const { ...data } = request.body;

    Object.assign(data, { id_user });

    const createQuotationUseCase = new CreateQuotationUseCase();

    const result = await createQuotationUseCase.execute(data);

    return response.json(result)
  }
}
