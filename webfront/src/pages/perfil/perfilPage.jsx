import { SideBar } from "../sideBar"
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import React from 'react';

export function Perfil() {
    return (
        <>
            <SideBar />
            <div className="p-6 sm:ml-64 flex justify-between bg-white h-screen pl-14">
                <div className="w-[35%] h-[50%] bg-slate-800 p-5 rounded-md">
                    <div className="flex">
                        <span className="w-[80%] flex justify-center items-center"><FaUser /></span>
                        <p className="text-2xl italic flex flex-wrap w-[80%] p-4">Lavínia de Campos Keidann adasda</p>
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>Senha:</p>
                    </div>
                </div>

                <div className="w-[63%] h-[50%] bg-slate-400 p-5 rounded-md">
                    <h1 className="text-2xl italic">Meu histórico de agendamentos</h1>

                </div>
            </div>
        </>
    )
}