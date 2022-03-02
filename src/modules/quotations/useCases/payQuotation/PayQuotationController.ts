import { Request, Response } from "express";
import { PayQuotationUseCase } from "./PayQuotationUseCase";

export class PayQuotationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const payQuotationUseCase = new PayQuotationUseCase()

    const quotation = await payQuotationUseCase.execute(id)

    return response.json(quotation)
  }
}