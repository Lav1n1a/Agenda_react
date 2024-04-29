import { SideBar } from "../sideBar"
import React from 'react';

export function Agendar() {
    return (
        <>
            <SideBar />
            <div className="p-2 sm:ml-64 flex justify-center items-center bg-white h-screen">

                <div className="w-[30%] bg-slate-800 p-5 rounded-md">
                    <p style={{ fontSize: '25px' }} className="py-9">Formulário de Agendamento </p>
                    <form>
                        <div className="flex flex-col gap-6">
                            <label className="flex flex-col gap-3">
                                <p>Especialidades:</p>
                                <input type="select" name="especialidades" className="text-black"/>
                            </label>
                            <div className="flex flex-row gap-2 w-[100%]" >
                                <label className="flex flex-col gap-3 w-[50%]">
                                    <p>Dia:</p>
                                    <input type="date" name="dia" className="text-black"/>
                                </label>
                                <label className="flex flex-col gap-3 w-[50%]">
                                    <p>Hora:</p>
                                    <input type="time" name="hora" className="text-black"/>
                                </label>
                            </div>
                            <label className="flex flex-col gap-3">
                                <p>Observações:</p>
                                <textarea placeholder="Digite seus sintomas..." rows="4" cols="50" className="text-black"/>
                            </label>
                            <button type="submit">Confirmar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}