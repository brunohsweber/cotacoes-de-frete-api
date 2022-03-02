import { Request, Response } from "express";
import { UpdateQuotationUseCase } from "./UpdateQuotationUseCase";

export class UpdateQuotationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { ...data } = request.body;

    Object.assign(data, { id });

    const updateQuotationUseCase = new UpdateQuotationUseCase();

    const result = await updateQuotationUseCase.execute(data);

    return response.json(result)
  }
}