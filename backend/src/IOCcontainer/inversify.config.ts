import { Container } from "inversify";
import { TrainerRepository } from "../repositorties/TrainerRepository";
import TrainerController from "../controllers/TrainerController";
import { DatabaseClient } from "../database/DatabaseClient";
import TYPES from "./types";




let container = new Container();


container.bind<DatabaseClient>(TYPES.DatabaseClient)
    .toConstantValue(new DatabaseClient(`mongodb+srv://admin:P9jDFyhJsOL9mQmP@cluster0-i8l6v.mongodb.net/test?retryWrites=true&w=majority`, "fitnessPortal"));
container.bind<TrainerRepository>(TYPES.TrainerRepository).to(TrainerRepository)
container.bind<TrainerController>(TYPES.TrainerController).to(TrainerController)


export default container;