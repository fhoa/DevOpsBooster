import { SwaggerRouter } from "koa-swagger-decorator";
import TrainerController from "./controllers/TrainerController";
import TYPES from "./IOCcontainer/types";
import container from "./IOCcontainer/inversify.config";


const router = new SwaggerRouter({prefix: "/api"});


// All routes

const trainerController = container.get<TrainerController>(TYPES.TrainerController);

router.get("/trainers", async (ctx) => trainerController.getTrainers(ctx));



//Swagger endpoint
router.swagger({
    title: "Fitness portalen",
    description: "API REST using NodeJS and KOA framework, typescript and MongoDB.",
    version: "1.0"
});

router.mapDir(__dirname);

export default router;


