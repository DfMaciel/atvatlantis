import { VisualizarReserva } from "../../interface/reservaInterface";
import { Form, FloatingLabel, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

interface VisualizarReservaModalProps {
    show: boolean;
    onHide: () => void;
    reserva: VisualizarReserva;
    onSave: (updatedReserva: VisualizarReserva) => void;
}

export default function VisualizarReservaModal(props: VisualizarReservaModalProps) {
    const { show, onHide, reserva, onSave } = props;
    const [acomodacao, setAcomodacao] = useState(reserva.acomodacao);
    const [dataInicio, setDataInicio] = useState(reserva.dataInicio);
    const [dataFim, setDataFim] = useState(reserva.dataFim);
    const [cliente, setCliente] = useState(reserva.cliente);
    const [isEditing, setIsEditing] = useState(false);
    const [tipoAcomodacao, setTipoAcomodacao] = useState("");

    useEffect(() => {
        setAcomodacao(reserva.acomodacao);
        setDataInicio(reserva.dataInicio);
        setDataFim(reserva.dataFim);
        setCliente(reserva.cliente);
    }, [reserva]);

    const handleSave = () => {
        const updatedReserva: VisualizarReserva = {
            ...reserva,
            acomodacao,
            dataInicio,
            dataFim,
            cliente
        };
        onSave(updatedReserva);
        onHide();
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes da Reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FloatingLabel controlId="floatingNomeCliente" label="Nome do cliente" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nome do cliente"
                            value={cliente.nome}
                            readOnly
                            className="read-only"
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNomeAcomodacao" label="Tipo de acomodação" className="mb-3">
                        <Form.Select
                            value={acomodacao.nomeAcomadacao}
                            onChange={(e) => setTipoAcomodacao(e.target.value)}
                            disabled={!isEditing}
                            className={!isEditing ? 'read-only' : ''}
                            >
                            <option value="solteiroSimples">Solteiro simples</option>
                            <option value="solteiroMais">Solteiro mais</option>
                            <option value="casalSimples">Casal simples</option>
                            <option value="familiaSimples">Família simples</option>
                            <option value="familiaMais">Família mais</option>
                            <option value="familiaSuper">Família super</option>
                                
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingDataInicio" label="Data de Início" className="mb-3">
                        <Form.Control
                            type="date"
                            placeholder="Data de Início"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            readOnly={!isEditing}
                            className={!isEditing ? 'read-only' : ''}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingDataFim" label="Data de Fim" className="mb-3">
                        <Form.Control
                            type="date"
                            placeholder="Data de Fim"
                            value={dataFim}
                            onChange={(e) => setDataFim(e.target.value)}
                            readOnly={!isEditing}
                            className={!isEditing ? 'read-only' : ''}
                        />
                    </FloatingLabel>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                {isEditing ? (
                    <Button variant="primary" onClick={handleSave}>Salvar</Button>
                ) : (
                    <Button variant="primary" onClick={toggleEditMode}>Editar</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}