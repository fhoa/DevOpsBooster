import { BaseContext } from "koa";
import { request, summary, path, body, responsesAll, tagsAll } from "koa-swagger-decorator";
import { TrainerRepository } from '../repositorties/TrainerRepository';
import { injectable, inject } from "inversify";
import "reflect-metadata";
import TYPES from "../IOCcontainer/types";

@injectable()
@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}, 401: { description: "unauthorized"}})
@tagsAll(["trainer"])
export default class TrainerController {
    
    private readonly trainerRepository :TrainerRepository;

    constructor(@inject(TYPES.TrainerRepository) trainerRepository_: TrainerRepository){
        this.trainerRepository = trainerRepository_;
    }

    @request("get", "/trainers")
    @summary("Find all trainers")
    public async getTrainers(ctx: BaseContext){
        ctx.body = this.trainerRepository.getAll();
    }
}
