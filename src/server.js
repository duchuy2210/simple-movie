import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/connectDB';
import initRoutes from './routes/routes';
const app = express();

//Ngăn chặn cors origin => Disable CORS
app.use(cors());

connectDB();
initRoutes(app);

dotenv.config();
let port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
