import { Request, Response } from "express";
import { ListAllOpenQuotationsUseCase } from "./ListAllOpenQuotationsUseCase";

export class ListAllOpenQuotationsController {
  async handle(request: Request, response: Response) {
    const listAllOpenQuotationsUseCase = new ListAllOpenQuotationsUseCase()

    const quotations = await listAllOpenQuotationsUseCase.execute()

    return response.json(quotations)
  }
}