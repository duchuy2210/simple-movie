import authRouter from "./authRoute";
import getRouter from "./getRoute";

function initRoutes(app){
  app.use('/auth',authRouter);
  app.use('/g',getRouter);
}
export default initRoutes;