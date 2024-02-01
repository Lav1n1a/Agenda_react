import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient' 

 export class CreateUser {
    handle(req: Request, res: Response) {
        const { email, senha } = req.body

        const user = prisma.user.create({
            data: {
                email, 
                senha
            }
        })
        return res.json(user)
    }
}