import { SideBar } from "../sideBar"
import React from 'react';

export function Agendamentos() {
    return (
        <>
            <SideBar />

            <div className="p-6 sm:ml-64 ">
                <div className="w-full bg-red-800 p-3 my-3">
                    <p>O Link da consulta será enviado no seu email pelo especialista.</p>
                </div>
                <div className="w-full bg-slate-800 p-5 rounded-md">
                    <p style={{ fontSize: '25px' }}>Especialidade: Alergia e Imunologia</p>
                    <div className="flex p-1" style={{ justifyContent: "space-between" }}>
                        <div>
                            <p>Data: 20/01/2024</p>
                            <p>Horário: 07:00</p>
                        </div>
                        <button className="bg-slate-950 p-2 rounded-md">
                            Iniciar Atendimento
                        </button>
                    </div>
                    <p className="text-red-600">Tolerância de 15 min</p>
                </div>
            </div>
        </>
    )
}