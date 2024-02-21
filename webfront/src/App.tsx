import './index.css'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import axios from 'axios'

export function App() {
  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   async function createUser(data: any) {
    const { email, senha } = data
 
    try {
      axios.post('http://localhost:4007/create',  { email, senha } )
      .then(res => console.log(res))
      
      setOutput(JSON.stringify(data))      
    } catch (error) {
      return error
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(createUser)}>
          <label>Email</label>
          <input type="email"
            className='bg-slate-400'
            {...register('email')}
          />

          <label>Senha</label>
          <input type="Senha"
            {...register('senha')}
          />

          <button type="submit"
          >Cadastrar
          </button>
        </form>
        <pre>{output}</pre>
      </div>
    </>
  )
}
