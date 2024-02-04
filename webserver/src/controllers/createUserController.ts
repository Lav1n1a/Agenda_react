import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient' 

 export class CreateUser {
    async handle(req: Request, res: Response) {
        try{
            const { email, senha } = req.body

        const user = await prisma.user.create({
            data: {
                email, 
                senha
            }
        })
        return res.json(user)

        }catch{
            (err: any) => {
                console.log(err)
                res.status(500)
            }
        }
    }
}