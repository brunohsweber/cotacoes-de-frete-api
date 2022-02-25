import { Request, Response, Router } from "express"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router()

/* Alias */
routes.get("/", (request: Request, response: Response) => response.redirect("/quotations/create"))

routes.get("/quotations/listAll", (request: Request, response: Response) => response.json({
  message: `List all deliveries quotations`
}))

routes.get("/quotations/listAllOpen", (request: Request, response: Response) => response.json({
  message: `List all open deliveries quotations`
}))

routes.get("/quotations/listAllClosed", (request: Request, response: Response) => response.json({
  message: `List all closesd deliveries quotations`
}))

routes.get("/quotations/show/:id", (request: Request, response: Response) => response.json({
  message: `Show delivery cotation ${request.params.id}`
}))

routes.post("/quotations/create", (request: Request, response: Response) => response.json({
  message: "Create a new delivery quotation"
}))

routes.put("/quotations/update/:id", (request: Request, response: Response) => response.json({
  message: `Update delivery quotation ${request.params.id}`
}))

routes.patch("/quotations/update/:id/close", (request: Request, response: Response) => response.json({
  message: `Update delivery quotation ${request.params.id} to closed`
}))

routes.patch("/quotations/update/:id/open", (request: Request, response: Response) => response.json({
  message: `Update delivery quotation ${request.params.id} to open`
}))

routes.delete("/quotations/delete/:id", (request: Request, response: Response) => response.json({
  message: `Delete a freight quotation ${request.params.id}`
}))

export { routes };
