import { Link } from "react-router-dom"

export function Login() {
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="pt-4 px-4">
                    <Link to='/' className=" text-slate-50">
                        <span aria-hidden="true" className="m-1">&larr;</span>Página Inicial</Link>
                </div>
                <div className="h-screen flex items-center justify-center">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-white">E-mail</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 py-1.5
                                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                 focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
                                    <input id="password" name="password" type="password" required
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300
                                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
            </div>
        </>
    )
}