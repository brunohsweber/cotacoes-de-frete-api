import { Router } from "express"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateCarrierController } from "./modules/carries/useCases/createCarrier/CreateCarrierController";
import { UpdateCarrierController } from "./modules/carries/useCases/updateCarrier/UpdateCarrierController";
import { CreateQuotationController } from "./modules/quotations/useCases/createQuotation/CreateQuotationController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createCarrierController = new CreateCarrierController()
const updateCarrierController = new UpdateCarrierController()
const createQuotationController = new CreateQuotationController()

// Users
routes.post("/users", createUserController.handle)
routes.post("/users/authenticate", authenticateUserController.handle)

// Carries
routes.post("/carries", ensureAuthenticated, createCarrierController.handle)
routes.put("/carries/:id", ensureAuthenticated, updateCarrierController.handle)

// Quotations

// Criar uma nova cotação
routes.post("/quotations", ensureAuthenticated, createQuotationController.handle)

/*
// Listar todas
routes.get("/quotations/all")

// Listar pagas
routes.get("/quotations/paid")

// Listar em aberto
routes.get("/quotations/open")

// Listar por id - "detalhes"List 
routes.get("/quotations/:id")

// Atualizar uma cotação
routes.put("/quotations/:id")

// Atualizar uma cotação para confirmada
routes.patch("/quotations/:id/confirm")

// Atualizar uma cotação para paga
routes.patch("/quotations/:id/pay")

// Deletar
routes.delete("/quotations/:id")
*/

export { routes };
