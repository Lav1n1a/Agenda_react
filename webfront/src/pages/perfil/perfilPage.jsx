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
                        {/* <span className="w-[60%] flex justify-center items-center"><FaUser /></span> */}
                        <p className="text-2xl italic flex flex-wrap w-[80%] p-4">Lavínia de Campos Keidann adasda</p>
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>Senha:</p>
                    </div>
                </div>

                <div className="w-[63%] h-[50%] bg-slate-400 p-5 rounded-md">
                    <h1 className="text-2xl italic">Meu histórico de agendamentos</h1>
                    <div className="w-2xl bg-slate-800 p-3 rounded-md">
                        <p style={{ fontSize: '20px' }}>Especialidade: Alergia e Imunologia</p>
                        <div className="flex p-1" style={{ justifyContent: "space-between" }}>
                            <div>
                                <p>Data: 20/01/2024</p>
                                <p>Horário: 07:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}