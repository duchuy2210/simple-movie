import authRouter from "./authRoute";

function initRoutes(app){
  app.use('/auth',authRouter);
}
export default initRoutes;