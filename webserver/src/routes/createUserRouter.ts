import express from 'express';
const router = express.Router()

import { CreateUser } from '../controllers/createUserController';

const createuser = new CreateUser();

router.post('/createUser', createuser.handle)

export default router