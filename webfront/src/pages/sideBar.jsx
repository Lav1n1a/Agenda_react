import React from 'react';
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaClipboard } from "@react-icons/all-files/fa/FaClipboard";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import { FaCalendar } from "@react-icons/all-files/fa/FaCalendar";

export function SideBar() {
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
                    <div className='py-6 px-10 text-xl text-gray-50 flex flex-row justify-center items-center leading-1'>
                            <span className='font-semibold'>AgendeSaúde</span>
                            <FaCalendar className='text-slate-50' />
                    </div>
                    <hr />
                    <ul className="space-y-2 font-medium p-3">
                        <li>
                            <a href="/perfil" className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-gray-100 hover:text-gray-800">
                                <FaUser className='text-slate-50'/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Meu Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/agendar" className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-gray-100 hover:text-gray-800">
                                <FaCalendarAlt className='text-slate-50'/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Agendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/agendamentos" className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-gray-100 hover:text-gray-800">
                                <FaClipboard className='text-slate-50'/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Meus Agendamentos</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-slate-50 rounded-lg hover:bg-gray-100 hover:text-gray-800">
                                <FaSignOutAlt className='text-slate-50'/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
