import { Request, Response } from 'express';
import { prisma } from '../database/prismaClient';

export class getAllUsers {
   async handle (req: Request, res: Response) {

    try{
        const allUsers = await prisma.user.findMany()
        return res.json(allUsers)
    }catch {
        (err: any) => {
            console.log(err)
            res.status(500)
        }
    }
    }
}