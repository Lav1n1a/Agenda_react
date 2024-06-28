import { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideBar } from '../sideBar';
import { Header } from '../header';
import { FaUser } from "@react-icons/all-files/fa/FaUser";

export function Agendamentos() {
    const [show, setShow] = useState(false);
    const [showlNew, setShowNew] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseNew = () => setShowNew(false);

    const showModal = () => setShow(true);
    const showModalNew = () => setShowNew(true);

    return (
        <>
            <SideBar />
            <div className="sm:ml-72 bg-slate-100 h-screen">
                <Header />
                <body className='p-5 bg-slate-100'>
                    {/* <div className="w-full bg-slate-800 p-2 rounded-md">
                    <p style={{ fontSize: '25px' }}>Especialidade: Alergia e Imunologia</p>
                    <div className="flex p-1" style={{ justifyContent: "space-between" }}>
                        <div>
                            <p>Data: 20/01/2024</p>
                            <p>Horário: 07:00</p>
                        </div>
                        <button className="bg-slate-950 p-2 rounded-md" onClick={showModal}>
                            Iniciar Consulta
                        </button>
                    </div>
                    <p className="text-red-600">Tolerância de 15 min</p>
                </div> */}
                    <Button variant="success" onClick={showModalNew}>+Novo</Button>
                    <div className='flex flex-col gap-2 mt-2'>
                        <Card style={{ maxHeight: '140px' }}>
                            <Card.Header as="h5">Especialidade: Alergia e Imunologia</Card.Header>
                            <Card.Body className='flex flex-col gap-16'>
                                {/* <Card.Title>Special title treatment</Card.Title> */}
                                <div className="flex flex-row justify-between">
                                    <Card.Text>
                                        <p>Data: 20/01/2024</p>
                                        <p>Horário: 07:00</p>
                                    </Card.Text>
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
                                    <p>Observações: blabalblablalbalblablafafad asdasda asdasd</p>
                                    <Button variant="primary" onClick={showModal} style={{ maxHeight: '50px' }}>Iniciar Consulta</Button>
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

                        {/* <div className="w-full bg-red-800 p-3 rounded-md">
                        <p>O Link da consulta será enviado no seu email pelo especialista.</p>
                    </div> */}
                    </div>
                </body>
            </div>
        </>
    );
}
