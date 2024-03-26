import { Link } from "react-router-dom"

export function PagIndex() {
  return (
    <>
    <div className="bg-slate-900">
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 leading-4" >
              <span className="sr-only">AgendaSaúde</span>
              
              
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to='/' className="text-sm font-semibold leading-6 text-slate-50">Home</Link>
            <a href="#" className="text-sm font-semibold leading-6 text-salte-50">Sobre o site</a>
            <a href="#" className="text-sm font-semibold leading-6 text-slate-50">Como funciona?</a>
            <a href="#" className="text-sm font-semibold leading-6 text-salte-50">GitHub</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to='/login' className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-4 text-slate-50">
            Entre na sua conta<span aria-hidden="true">&rarr;</span></Link>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-28 lg:py-44">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">Faça agendamento de suas consultas com facilidade!</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600"> Marque seus compromissos de forma rápida e simples.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to='/create' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cadastre-se</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}