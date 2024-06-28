import React from 'react';
import axios from 'axios'
import { SideBar } from './sideBar';
import { Header } from './header';

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
            <div className="sm:ml-72 bg-slate-100 h-screen">
                <Header />
            </div>


        </>
    )
}