import { Request, Response } from 'express';
import { prisma } from '../database/prismaClient';

export class GetUser {
   async handle (req: Request, res: Response) {

    try{

        const { email, senha } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'O email é obrigatório' });
         }

         if (!senha) {
            return res.status(400).json({ error: 'A senha é obrigatória' });
         }

         const getuser = await prisma.user.findUnique({
            where: {
               email: email,
            },
         });

        if(getuser){
            if(getuser.senha != senha){
                return res.status(404).json({ error: 'Senha incorreta' });
            }else {

                return res.json(getuser);
            }
            
        }else {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
     
      
    }catch (err) {
        console.error(err);
        return err;
    }
    }
}