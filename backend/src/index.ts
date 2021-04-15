import Koa from 'koa';
import router from "./router";
import cors from '@koa/cors'
import logger from "koa-logger";

const app = new Koa();

app.use(cors({ origin: '*' }))

// Print requests in console
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

    

app.listen(4000)
console.log("Swagger available http://localhost:4000/api/swagger-html")
console.log('LÅGSUS!!! on port 4000')