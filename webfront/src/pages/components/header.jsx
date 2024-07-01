import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal, Button, Card } from 'react-bootstrap';
import { FaUser } from "@react-icons/all-files/fa/FaUser";

export function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const showModal = () => setShow(true);

    return (
        <>
            <header className="bg-slate-600 h-[5%] flex justify-end items-center">
                {/* <div className="flex flex-row mx-14 gap-2 items-center">
                    <button className='cursor-pointer flex flex-row gap-2 items-center' onClick={showModal}>
                        <FaUser className="text-slate-50 h-5 w-5" />
                        <p className="text-slate-50 mt-3">Meu Perfil </p>
                    </button>
                </div> */}
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="mx-14 gap-2 items-center">
                        Meu Perfil
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={showModal}>Editar Perfil</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </header>
            <Modal show={show} onHide={handleClose} className="text-black">
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="flex flex-col gap-3 w-[100%]">
                            <label className="flex flex-row gap-1">
                                <p className='w-[10%]'>Nome:</p>
                                <input type="text" name="nome" className="text-black border-solid border-1 w-[90%] rounded-md p-2"/>
                            </label>
                            <label className="flex flex-row gap-1">
                                <p className='w-[10%]'>Email:</p>
                                <input type="text" name="email" className="text-black border-solid border-1 w-[90%] rounded-md p-2"/>
                            </label>
                            <label className="flex flex-row gap-1">
                                <p className='w-[10%]'>Senha:</p>
                                <input type="password" name="senha" className="text-black border-solid border-1 w-[90%] rounded-md p-2"/>
                            </label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
