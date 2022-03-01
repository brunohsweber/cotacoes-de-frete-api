import { Request, Response, Router } from "express"
import { AuthenticateUserController } from "./modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

/* Alias */
routes.get("/", (request: Request, response: Response) => response.json({ message: "Hello World!!" }))

// Users
routes.post("/users", createUserController.handle)
routes.post("/users/authenticate", authenticateUserController.handle)

export { routes };
