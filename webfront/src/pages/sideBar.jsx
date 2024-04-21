import React from 'react'; 
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaClipboard } from "@react-icons/all-files/fa/FaClipboard";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";

export function SideBar() {
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className='py-6'>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white px-12">AgendeSaúde</span>
                    </div>
                    <hr />
                    <ul className="space-y-2 font-medium p-3">
                        <li>
                            <a href="/perfil" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                               <FaUser />
                                <span className="flex-1 ms-3 whitespace-nowrap">Meu Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/agendar" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaCalendarAlt />
                                <span className="flex-1 ms-3 whitespace-nowrap">Agendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/agendamentos" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaClipboard />
                                <span className="flex-1 ms-3 whitespace-nowrap">Meus Agendamentos</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaSignOutAlt />
                                <span className="flex-1 ms-3 whitespace-nowrap">Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
