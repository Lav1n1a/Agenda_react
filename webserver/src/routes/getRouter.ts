import express from 'express';
const router = express.Router()

import getController from '../controllers/getController';

router.get('/', getController)

export default router