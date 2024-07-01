import { Link } from "react-router-dom"
import { FaCalendar } from "@react-icons/all-files/fa/FaCalendar";

export function ComoFunciona() {
    return (
        <>
            <div>
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="font-semibold text-xl text-slate-70 flex flex-row items-center leading-1 no-underline" >
                                <span className="text-white">AgendeSaúde</span>
                                <FaCalendar />
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link to='/' className="font-semibold text-lg text-slate-50 no-underline">Página Inicial</Link>
                            <a href="/sobre-o-site" className="font-semibold text-lg text-slate-50 no-underline">Sobre o Site</a>
                            <a href="/como-funciona" className="font-semibold text-lg text-slate-50 no-underline">Como funciona?</a>
                            <a href="https://github.com/Lav1n1a" target="_blank" className="font-semibold text-lg text-slate-50 no-underline">GitHub</a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to='/login' className=" block rounded-lg px-3 py-2.5 text-base font-semibold text-lg text-slate-50 no-underline">
                                Entre na sua conta<span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </nav>
                </header>

                <div className="relative isolate w-[40%] lg:mx-[30%] h-[100%]">
                    <div className="sm:py-5 lg:py-3 lg:mt-32 ">
                        <div className="text-center text-black bg-white p-3">
                            <h2>Como Funciona?</h2>
                            <div className="p-4">
                                <p>
                                    Lorem ipsum fusce duis pellentesque venenatis ultrices augue turpis ultricies felis dictum, donec placerat nulla scelerisque nibh dol
                                    or nec faucibus fam
                                    es tortor sed feugiat, conubia etiam morbi ante sollicitudin auctor blandit ac maecenas justo. pharetra suspendisse viverra condiment
                                    um sed etiam euismod ia
                                    culis adipiscing, conubia eleifend vel turpis laoreet quis id, taciti blandit phasellus sodales nibh pulvinar tincidunt. ipsum commod
                                    o proin blandit augue co
                                    nsequat eros metus inceptos lacus nec,
                                    phasellus purus cursus potenti condimentum elit posuere sollicitudin iaculis. amet cras nisl posuere congue euismod class, maecenas
                                    aptent dolor nam maece
                                    nas tincidunt, risus litora imperdiet aenean interdum.
                                </p>
                                <p>

                                    Sodales interdum etiam sit class platea adipiscing vivamus vestibulum augue, ullamcorper scelerisque ac est torquent netus donec. auctor risus vitae arcu aliquet
                                    ullamcorper conse
                                    ctetur rhoncus, himenaeos potenti cras vehicula pretium elit gravida, inceptos consequat ullamcorper donec inceptos ac. magna semper adipiscing lacus netus soda
                                    les nisi nec, ut nostra fames tortor nulla feugiat phasellus cubilia, nunc tristique orci iaculis neque bibendum. tempor eget feugiat libero tempus gravida leo, lectus rutrum varius nullam vulputate aliquet class, tellus gravida sollicitudin tellus tortor. tincidunt velit tincidunt pharetra arcu condimentum facilisis sed congue eget egestas, tempus ultrices lorem mi semper netus arcu erat consequat arcu, bibendum rutrum vulputate fermentum molestie nostra faucibus suspendisse nec.

                                    Est ad quis amet nisl integer erat donec pulvinar dolor mauris, elit aptent purus vulputate nullam ultricies fusce nam diam aenean ad, fusce duis elementum est
                                    to
                                    rquent vel a interdum vehicula. adipiscing accumsan dapibus aliquam conubia nostra vivamus himenaeos tortor, senectus dui conubia ullamcorper gravida arcu.
                                </p>
                            </div>
                            {/* <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">Faça agendamento de suas consultas com facilidade!</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600"> Marque seus compromissos de forma rápida e simples.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to='/create' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline">Cadastre-se</Link>
                <Link to='/login' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline">Entre na sua conta</Link>
              </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}