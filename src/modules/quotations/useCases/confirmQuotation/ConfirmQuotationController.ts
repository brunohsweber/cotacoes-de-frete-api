import { Request, Response } from "express";
import { ConfirmQuotationUseCase } from "./ConfirmQuotationUseCase";

export class ConfirmQuotationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const confirmQuotationUseCase = new ConfirmQuotationUseCase()

    const quotation = await confirmQuotationUseCase.execute(id)

    return response.json(quotation)
  }
}