import express from 'express';
const router = express.Router()

import { CreateUser } from '../controllers/createUserController';

const createuser = new CreateUser();

router.post('/create', createuser.handle)

export default router