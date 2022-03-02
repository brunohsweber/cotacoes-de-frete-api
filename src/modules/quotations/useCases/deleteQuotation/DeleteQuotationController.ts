import { Request, Response } from "express";
import { DeleteQuotationUseCase } from "./DeleteQuotationUseCase";

export class DeleteQuotationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteQuotationUseCase = new DeleteQuotationUseCase();

    await deleteQuotationUseCase.execute(id);

    return response.status(204).send();
  }
}