import express, { Application } from 'express';
import getAllUsers from './routes/getAllUsers';
import createUserRouter from './routes/createUserRouter'

const app: Application = express();
app.use(express.json())


//Rotas
app.use(createUserRouter);
app.use(getAllUsers)

app.listen(4007, () => console.log('Rodando na porta 4007'))

export default app