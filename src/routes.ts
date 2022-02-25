import { Request, Response, Router } from "express"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router()

routes.get("/quotes/list", (request: Request, response: Response) => response.json({
  message: `List all freight cotes`
}))

routes.post("/quotes/create", (request: Request, response: Response) => response.json({
  message: "Create a new freight cote"
}))

routes.put("/quotes/update/:id", (request: Request, response: Response) => response.json({
  message: `Update freight cote ${request.params.id}`
}))

routes.delete("/quotes/delete/:id", (request: Request, response: Response) => response.json({
  message: `Delete a freight cote ${request.params.id}`
}))

export { routes };
