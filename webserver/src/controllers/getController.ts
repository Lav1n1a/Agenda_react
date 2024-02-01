import { Request, Response } from 'express';

const getAll = (req: Request,res: Response) => {
    return res.json({message: 'Ola'})
}

export default getAll