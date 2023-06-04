import authRouter from "./authRoute";

function initRoutes(app){
  app.use('/',authRouter);
}
export default initRoutes;