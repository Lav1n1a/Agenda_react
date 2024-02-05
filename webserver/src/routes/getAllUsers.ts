import express from 'express';
const router = express.Router()

import { getAllUsers }  from '../controllers/getAllUsers';

const getallusers = new getAllUsers();

router.get('/usuarios', getallusers.handle)

export default router