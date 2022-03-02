import { Request, Response, Router } from "express"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateCarrierController } from "./modules/carries/useCases/createCarrier/CreateCarrierController";
import { UpdateCarrierController } from "./modules/carries/useCases/updateCarrier/UpdateCarrierController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createCarrierController = new CreateCarrierController()
const updateCarrierController = new UpdateCarrierController()

/* Alias */
routes.get("/", (request: Request, response: Response) => response.json({ message: "Hello World!!" }))

// Users
routes.post("/users", createUserController.handle)
routes.post("/users/authenticate", authenticateUserController.handle)

// Carries
routes.post("/carries", ensureAuthenticated, createCarrierController.handle)
routes.post("/carries/update/:id", ensureAuthenticated, updateCarrierController.handle)

export { routes };
