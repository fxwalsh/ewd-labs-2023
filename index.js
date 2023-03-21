// Load the http module to create an http server.
import createRouter from './src/routes/userRouter';
import buildDependencies from "./src/config/dependencies";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const dependencies = buildDependencies();

const port = process.env.PORT

const app = express();
app.use(express.json())

app.use('/api/users', createRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});