import './index.css'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de email inválido!'),
  senha: z.string()
  .min(6, 'A senha precisa no mínimo 6 caracteres')
  
})

export function App() {
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createUserFormSchema)
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function createUser(data: any) {
    const { email, senha } = data

    console.log(output)

    try {
      axios.post('http://localhost:4007/create', { email, senha })
        .then(res => console.log(res))

      setOutput(JSON.stringify(data))
      alert('Usuário criado com sucesso')

    } catch (error) {
      return error
    }
  }

  return (
    <>
      <div className='bg-slate-900 h-screen flex items-center justify-center'>
        <div className='w-full max-w-sm bg-slate-700 rounded-md pb-7'>
          <form onSubmit={handleSubmit(createUser)}
            className='flex flex-col gap-4 p-7'
          >
            <div className='flex flex-col gap-4'>
              <label>E-mail</label>
              <input type="email"
                className='bg-slate-800 rounded-md px-3'
                {...register('email')}
              />
             {errors.email && <span className='text-red-600'>{errors.email?.message}</span>}
            </div>

            <div className='flex flex-col gap-4'>
              <label>Senha</label>
              <input type="password"
                className='bg-slate-800 rounded-md  px-3'
                {...register('senha')}
              />
              {errors.senha && <span className='text-red-600'>{errors.senha?.message}</span>}
            </div>

            <button type="submit"
              className='bg-gray-800 h-10 rounded-md hover:bg-slate-400'
            >Cadastrar
            </button>
          </form>
          <div className='d-flex flex gap-2 items-center justify-center'>
            <p>Já possui conta?</p>
            <p><button>Faça seu Login</button></p>
          </div>
        </div>
      </div>
    </>
  )
}
