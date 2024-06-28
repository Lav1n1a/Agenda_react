import { Link } from "react-router-dom"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ToastContainer } from 'react-toastify';
import { toast } from "sonner"

const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de email inválido!'),
  senha: z.string()
    .nonempty('A senha é obrigatório!')
})

export function CreateUser() {
  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(createUserFormSchema)
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function createUser(data: any) {
    const { email, senha } = data

    try {

      await axios.post('http://localhost:4007/create', { email, senha },{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => console.log(res))

      toast.success('Usuário criado com sucesso!')

      setTimeout(function () {
        window.location.href = "/login";
      }, 2000);

    } catch (error) {
      return error
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="pt-4 px-4">
          <Link to='/' className=" text-slate-50 no-underline">
            <span aria-hidden="true" className="m-1">&larr;</span>Página Inicial</Link>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(createUser)}>
              <div>
                <label className="block text-sm font-medium leading-6 text-white">E-mail</label>
                <div className="mt-2">
                  <input id="email" type="email" required className="block w-full rounded-md border-0 py-1.5
                                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                 focus:ring-2 focus:ring-inset p-3
                                 focus:ring-indigo-600 sm:text-sm sm:leading-6 text-slate-950 font-semibold"
                    {...register('email')} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6">Senha</label>
                </div>
                <div className="mt-2">
                  <input id="password" type="password" required
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300
                                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                 sm:text-sm sm:leading-6 p-3
                                 text-slate-950 font-semibold"
                    {...register('senha')} />
                </div>
              </div>

              <div>
                <button type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600
                             px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                             focus-visible:outline-indigo-600">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  )
}
