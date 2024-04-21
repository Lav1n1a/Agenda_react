import React from 'react'; 
import axios from 'axios'
import { SideBar } from './sideBar';

export function Home() {

    async () => {
        const token = localStorage.getItem('accessToken');
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await axios.get('/home', config);

            console.log(response)
        } catch (err) {
            // Trate os erros de requisição
        }
    }

    return (
        <>

            <SideBar />

            <div className="p-4 sm:ml-64">
                <div className="flex gap-x-10 p-72 m-auto text-lg">
                    <button className="text-left md:text-center bg-slate-950 p-5">
                        Agendar
                    </button>
                    <button className="text-left md:text-center bg-slate-950 p-5">
                        Meus Agendamentos
                    </button>
                </div>
            </div>


        </>
    )
}