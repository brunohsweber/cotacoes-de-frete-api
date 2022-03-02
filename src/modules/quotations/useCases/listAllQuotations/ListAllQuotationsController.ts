import { Request, Response } from "express";
import { ListAllQuotationsUseCase } from "./ListAllQuotationsUseCase";

export class ListAllQuotationsController {
  async handle(request: Request, response: Response) {
    const listAllQuotationsUseCase = new ListAllQuotationsUseCase()

    const quotations = await listAllQuotationsUseCase.execute()

    return response.json(quotations)
  }
}