import express, { Application } from 'express';
import router from './routes/getRouter';
import createUserRouter from './routes/createUserRouter'

const app: Application = express();
app.use(express.json())
app.use(router)

//Rotas
app.use(createUserRouter);

app.listen(4007, () => console.log('Rodando na porta 4007'))

export default app