import { SideBar } from "../sideBar"
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export function Perfil() {
    const [show, setShow] = useState(false);
    const [showlNew, setShowNew] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseNew = () => setShowNew(false);

    const showModal = () => setShow(true);
    const showModalNew = () => setShowNew(true);
    return (
        <>
            <SideBar />
            <div className="p-5 pt-20 sm:ml-72 bg-slate-100 h-screen flex flex-row gap-3">
                <div className="w-[35%] h-[30%] bg-slate-800 p-4 rounded-md">
                    <div className="flex">
                        {/* <span className="w-[60%] flex justify-center items-center"><FaUser /></span> */}
                        <p className="text-2xl italic flex flex-wrap w-[80%] ">Lavínia de Campos Keidann adasda</p>
                    </div>
                    <div>
                        <p>Nome Exibido:</p>
                        <p>Email:</p>
                        <p>Senha:</p>
                    </div>
                    <Button>Excluir Conta</Button>
                </div>

                <div className="w-[63%] h-[50%] bg-slate-400 p-4 rounded-md">
                    <h1 className="text-2xl italic">Meu histórico de agendamentos</h1>
                    <Button variant="success" onClick={showModalNew}>+Novo</Button>
                    <Card style={{ maxHeight: '140px' }} className="flex flex-col gap-3">
                        <Card.Header as="h5">Especialidade: Alergia e Imunologia</Card.Header>
                        <Card.Body className='flex flex-col gap-16'>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <div className="flex flex-row justify-between">
                                <Card.Text>
                                    <p>Data: 20/01/2024</p>
                                    <p>Horário: 07:00</p>
                                </Card.Text>
                                <p>Status:Ativo</p>
                                <p>Observações: blabalblablalbalblablafafad asdasda asdasd</p>
                                <Button variant="primary" onClick={showModal} style={{ maxHeight: '50px' }}>Iniciar Consulta</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ maxHeight: '140px' }}>
                        <Card.Header as="h5">Especialidade: Alergia e Imunologia</Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p>Data: 20/01/2024</p>
                                    <p>Horário: 07:00</p>
                                </div>
                                <p>Status:Ativo</p>
                                <p>Observações: blabalblablalbalblablafafad asdasda asdasd</p>
                                {/* <Button variant="primary" style={{ maxHeight: '50px' }}>Iniciar Consulta</Button> */}
                            </div>
                        </Card.Body>
                    </Card>
                    <Modal show={showlNew} onHide={handleCloseNew} className="text-black">
                        <Modal.Header closeButton>
                            <Modal.Title>Formulário de Agendamento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="flex flex-col gap-3 w-[100%]">
                                    <label className="flex flex-row gap-1">
                                        <p>Especialidades:</p>
                                        <input type="select" name="especialidades" className="text-black border-solid border-1 w-[100%] rounded-md " defaultValue={['orange', 'banana']} />
                                    </label>
                                    <div className="flex flex-row gap-2" >
                                        <label className="flex flex-row gap-1 w-[50%]">
                                            <p>Dia:</p>
                                            <input type="date" name="dia" className="text-black border-solid border-1 w-[100%] text-center rounded-md" />
                                        </label>
                                        <label className="flex flex-row gap-1 w-[50%]">
                                            <p>Hora:</p>
                                            <input type="time" name="hora" className="text-black border-solid border-1 w-[100%] text-center rounded-md" />
                                        </label>
                                    </div>
                                    <label className="flex flex-col">
                                        <p>Observações:</p>
                                        <textarea placeholder="Digite seus sintomas..." rows="4" cols="50" className="text-black border-solid border-1 rounded-md" />
                                    </label>

                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseNew}>
                                Fechar
                            </Button>
                            <Button variant="primary" onClick={handleCloseNew}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>

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
                </div>
            </div>
        </>
    )
}