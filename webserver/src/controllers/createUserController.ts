import { Request, Response } from 'express'
import { prisma } from '../database/prismaClient' 

 export class CreateUser {
    
    async handle(req: Request, res: Response) {
        console.log('chegou aqui', req.body)
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

        }catch{
            (err: any) => {
                console.log(err)
                res.status(500)
            }
        }
    }
}