/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import { toast } from "sonner"


export function Login() {
    const { register, handleSubmit } = useForm();


    async function onLogin(data: any) {
        const { email, senha } = data;

        console.log(data);

        try {
            const response = await axios.post('http://localhost:4007/getuser', { email, senha })
            const { accessToken } = response.data;

            // Armazene o token JWT localmente
            localStorage.setItem('accessToken', accessToken);

            toast.success('Login feito com sucesso!');

            setTimeout(function () {
                window.location.href = "/home";
            }, 2000);

        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                toast.error(err.response.data.error); // Exibe o erro específico retornado pelo backend
            } else {
                console.log(err); // Se não houver uma resposta com a propriedade 'error', imprime o erro completo
                toast.error('Erro ao realizar login');
            }
        }
    }

    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="pt-4 px-4">
                    <Link to='/' className=" text-slate-50">
                        <span aria-hidden="true" className="m-1">&larr;</span>Página Inicial</Link>
                </div>
                <div className="h-screen flex items-center justify-center">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit(onLogin)}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-white">E-mail</label>
                                <div className="mt-2">
                                    <input id="email" type="email" required className="block w-full rounded-md border-0 py-1.5
                                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                 focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                                        {...register('email')}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6">Senha</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" type="password" required
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300
                                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black"
                                        {...register('senha')} />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600
                             px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                             focus-visible:outline-indigo-600">Entrar</button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500 d-flex flex gap-2 justify-center">
                            Não possui uma conta?
                            <Link to="/create" className="font-semibold text-indigo-600 hover:text-indigo-500">Cadastre-se</Link>
                        </p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}