import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { VisualizarUsuario } from '../interface/usuarioInterface';
import { VisualizarReserva } from '../interface/reservaInterface';
import { VisualizarAcomodacao } from '../interface/acomodacaoInterface';

const acomodacaoOptions = [
    { value: 'solteiroSimples', label: 'Solteiro Simples', camaSolteiro: 1, camaCasal: 0, suite: 1, climatizacao: false, garagem: 0 },
    { value: 'solteiroMais', label: 'Solteiro Mais', camaSolteiro: 1, camaCasal: 0, suite: 1, climatizacao: true, garagem: 1 },
    { value: 'casalSimples', label: 'Casal Simples', camaSolteiro: 0, camaCasal: 1, suite: 1, climatizacao: true, garagem: 1 },
    { value: 'familiaSimples', label: 'Família Simples', camaSolteiro: 2, camaCasal: 1, suite: 1, climatizacao: true, garagem: 1 },
    { value: 'familiaMais', label: 'Família Mais', camaSolteiro: 5, camaCasal: 1, suite: 2, climatizacao: true, garagem: 2 },
    { value: 'familiaSuper', label: 'Família Super', camaSolteiro: 6, camaCasal: 2, suite: 3, climatizacao: true, garagem: 2 }
];

export default function CadastrarReservaPage() {
    const [documentoUsuario, setDocumentoUsuario] = useState<string>('');
    const [tipoAcomodacao, setTipoAcomodacao] = useState<string>('');
    const [dataInicio, setDataInicio] = useState<string>('');
    const [dataFim, setDataFim] = useState<string>('');

    const handleDocumentoUsuarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocumentoUsuario(event.target.value);
    };

    const handleTipoAcomodacaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoAcomodacao(event.target.value);
    };

    const handleDataInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataInicio(event.target.value);
    };

    const handleDataFimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataFim(event.target.value);
    };

    const handleRegisterReserva = () => {

        const acomodacao = acomodacaoOptions.find(option => option.value === tipoAcomodacao);

        if (!acomodacao) {
            alert('Tipo de acomodação inválido');
            return;
        }

    };

    return (
        <div className="divTotalCadastro">
            <h1 style={{ textAlign: "center", color: "white" }}>Registrar Reserva</h1>
            <Form className="formCadastro" style={{ width: "50%", marginTop: "2%" }}>
                <FloatingLabel controlId="floatingDocumentoUsuario" label="Documento do Usuário" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Documento do Usuário"
                        value={documentoUsuario}
                        onChange={handleDocumentoUsuarioChange}
                    />
                </FloatingLabel>
                {documentoUsuario && (
                    <>
                        <FloatingLabel controlId="floatingTipoAcomodacao" label="Tipo de Acomodação" className="mb-3">
                            <Form.Select
                                aria-label="Tipo de Acomodação"
                                value={tipoAcomodacao}
                                onChange={handleTipoAcomodacaoChange}
                            >
                                <option value="">Selecione o tipo de acomodação</option>
                                {acomodacaoOptions.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingDataInicio" label="Data de Início" className="mb-3">
                            <Form.Control
                                type="date"
                                placeholder="Data de Início"
                                value={dataInicio}
                                onChange={handleDataInicioChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingDataFim" label="Data de Fim" className="mb-3">
                            <Form.Control
                                type="date"
                                placeholder="Data de Fim"
                                value={dataFim}
                                onChange={handleDataFimChange}
                            />
                        </FloatingLabel>
                        <div className="botaoEnviarForm">
                                <Button size="lg" onClick={handleRegisterReserva}> Registrar reserva </Button>
                            </div>
                    </>
                )}
            </Form>
        </div>
    );
}