import { Router } from "express"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateCarrierController } from "./modules/carries/useCases/createCarrier/CreateCarrierController";
import { UpdateCarrierController } from "./modules/carries/useCases/updateCarrier/UpdateCarrierController";
import { ConfirmQuotationController } from "./modules/quotations/useCases/confirmQuotation/ConfirmQuotationController";
import { CreateQuotationController } from "./modules/quotations/useCases/createQuotation/CreateQuotationController";
import { DeleteQuotationController } from "./modules/quotations/useCases/deleteQuotation/DeleteQuotationController";
import { ListAllOpenQuotationsController } from "./modules/quotations/useCases/listAllOpenQuotations/ListAllOpenQuotationsController";
import { ListAllPaidQuotationsController } from "./modules/quotations/useCases/listAllPaidQuotations/ListAllPaidQuotationsController";
import { ListAllQuotationsController } from "./modules/quotations/useCases/listAllQuotations/ListAllQuotationsController";
import { PayQuotationController } from "./modules/quotations/useCases/payQuotation/PayQuotationController";
import { ShowDetailsQuotationController } from "./modules/quotations/useCases/showDetailsQuotation/ShowDetailsQuotationController";
import { UpdateQuotationController } from "./modules/quotations/useCases/updateQuotation/UpdateQuotationController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const createCarrierController = new CreateCarrierController()
const updateCarrierController = new UpdateCarrierController()
const createQuotationController = new CreateQuotationController()
const listAllQuotationsController = new ListAllQuotationsController()
const listAllOpenQuotationsController = new ListAllOpenQuotationsController()
const listAllPaidQuotationsController = new ListAllPaidQuotationsController()

const showDetailsQuotationController = new ShowDetailsQuotationController()
const confirmQuotationController = new ConfirmQuotationController()
const payQuotationController = new PayQuotationController()
const updateQuotationController = new UpdateQuotationController()
const deleteQuotationController = new DeleteQuotationController()

// Users
routes.post("/users", createUserController.handle)
routes.post("/users/authenticate", authenticateUserController.handle)

// Carries
routes.post("/carries", ensureAuthenticated, createCarrierController.handle)
routes.put("/carries/:id", ensureAuthenticated, updateCarrierController.handle)

// Quotations

// Criar uma nova cotação
routes.post("/quotations", ensureAuthenticated, createQuotationController.handle)


// Listar todas
routes.get("/quotations/all", ensureAuthenticated, listAllQuotationsController.handle)

// Listar todas em aberto (confirmadas e não pagas)
routes.get("/quotations/open", ensureAuthenticated, listAllOpenQuotationsController.handle)

// Listar todas pagas (confirmadas e pagas)
routes.get("/quotations/paid", ensureAuthenticated, listAllPaidQuotationsController.handle)

// Atualizar uma cotação para confirmada
routes.patch("/quotations/:id/confirm", ensureAuthenticated, confirmQuotationController.handle)

// Atualizar uma cotação para paga
routes.patch("/quotations/:id/pay", ensureAuthenticated, payQuotationController.handle)

// Listar por id - "detalhes"
routes.get("/quotations/:id", ensureAuthenticated, showDetailsQuotationController.handle)

// Atualizar uma cotação
routes.put("/quotations/:id", ensureAuthenticated, updateQuotationController.handle)

// Deletar
routes.delete("/quotations/:id", ensureAuthenticated, deleteQuotationController.handle)


export { routes };
