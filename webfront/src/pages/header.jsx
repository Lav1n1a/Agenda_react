import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card } from 'react-bootstrap';
import { FaUser } from "@react-icons/all-files/fa/FaUser";

export function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <>
            <header className="bg-slate-600 h-[5%] flex justify-end items-center">
                <div className="flex flex-row mx-14 gap-2 items-center">
                    <button className='cursor-pointer flex flex-row mx-10 gap-2 items-center' onClick={showModal}>
                        <FaUser className="text-slate-50 h-5 w-5" />
                        <p className="text-slate-50 mt-3">Meu Perfil </p>
                    </button>
                </div>
            </header>
            <Modal show={show} onHide={handleClose} className="text-black">
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseja realmente iniciar o consulta?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
