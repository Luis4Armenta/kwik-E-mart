import { Request, Response } from "express";
import { DoSaleUseCase } from "./DoSale.UseCase";

export class DoSaleController {
  constructor(
    private readonly doSaleUseCase: DoSaleUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const success = await this.doSaleUseCase.execute(request.body)

    if (success) {
      return response.status(200).json({
        message: 'The purchase has been successful',
        ok: true
      });
    } else {
      return response.status(400).json({
        message: 'An error occurred during purchase, system down!..',
        ok: false
      });
    }
  }
}