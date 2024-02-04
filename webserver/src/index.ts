import express, { Application } from 'express';
import showUsers from './routes/getRouter';
import createUserRouter from './routes/createUserRouter'

const app: Application = express();
app.use(express.json())


//Rotas
app.use(createUserRouter);
app.use(showUsers)

app.listen(4007, () => console.log('Rodando na porta 4007'))

export default app