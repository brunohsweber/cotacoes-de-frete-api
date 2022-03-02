import { Request, Response } from "express";
import { ShowDetailsQuotationUseCase } from "./ShowDetailsQuotationUseCase";

export class ShowDetailsQuotationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const showDetailsQuotationUseCase = new ShowDetailsQuotationUseCase()

    const quotation = await showDetailsQuotationUseCase.execute(id)

    return response.json(quotation)
  }
}