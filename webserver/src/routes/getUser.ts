import express from 'express';
const router = express.Router()

import { GetUser } from '../controllers/getUserController';

const getuser = new GetUser();

router.post('/getuser', getuser.handle)

export default router