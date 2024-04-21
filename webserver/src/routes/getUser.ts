import express from 'express';
import { authenticateToken } from '../authMiddle';
const router = express.Router()

import { GetUser } from '../controllers/getUserController';

const getuser = new GetUser();

router.post('/getuser', authenticateToken, getuser.handle)

export default router