import { Request, Response, Router } from "express"
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()

/* Alias */
routes.get("/", (request: Request, response: Response) => response.json({ message: "Hello World!!" }))

// Users
routes.post("/user", createUserController.handle)

export { routes };
