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

        console.log(user)
        return res.json(user)

        }catch(err){
            console.log(err);
        }
    }
}