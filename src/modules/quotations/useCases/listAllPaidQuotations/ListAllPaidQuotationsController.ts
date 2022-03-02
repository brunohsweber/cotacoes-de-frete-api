import { Request, Response } from "express";
import { ListAllPaidQuotationsUseCase } from "./ListAllPaidQuotationsUseCase";

export class ListAllPaidQuotationsController {
  async handle(request: Request, response: Response) {
    const listAllPaidQuotationsUseCase = new ListAllPaidQuotationsUseCase()

    const quotations = await listAllPaidQuotationsUseCase.execute()

    return response.json(quotations)
  }
}