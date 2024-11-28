import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button, Row, Col, Card } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { VisualizarReserva } from '../interface/reservaInterface';
import VisualizarReservaModal from '../componentes/modal/visualizarReservaModal'; 

const initialReservas: VisualizarReserva[] = [
    {
        id: 1,
        acomodacao: {
            nomeAcomadacao: 'Suite Luxo',
            camaSolteiro: 2,
            camaCasal: 1,
            suite: 1,
            climatizacao: true,
            garagem: 1,
            quantidadeDisponivel: 5
        },
        dataInicio: '2023-12-01',
        dataFim: '2023-12-10',
        cliente: {
            id: 1,
            nome: 'João Silva',
            email: 'joao@example.com',
            dataNascimento: '1990-01-01',
            estado: 'SP',
            cidade: 'São Paulo',
            rua: 'Rua A',
            numeroRua: '123',
            cep: '01000-000',
            documentos: [
                { tipo: 'cpf', numero: '123.456.789-00', dataEmissao: '2010-01-01' },
                { tipo: 'rg', numero: '12.345.678-9', dataEmissao: '2005-01-01' }
            ],
            telefones: [
                { ddd: '11', numero: '98765-4321' },
                { ddd: '11', numero: '91234-5678' }
            ],
            dependentes: [
                {
                    id: 7,
                    nome: 'Lucas Silva',
                    email: 'lucas@gmail.com',
                    dataNascimento: '2015-05-20',
                    estado: 'SP',
                    cidade: 'São Paulo',
                    rua: 'Rua A',
                    numeroRua: '123',
                    cep: '01000-000',
                    documentos: [
                        { tipo: 'CPF', numero: '123456', dataEmissao: '2015-05-20' }
                    ],
                    telefones: [
                        { ddd: '11', numero: '98765-4321' },
                        { ddd: '11', numero: '91234-5678' }
                    ],
                    isDependente: true
                },
                {
                    id: 8,
                    nome: 'Mariana Silva',
                    email: 'mariana@gmail.com',
                    dataNascimento: '2018-08-15',
                    estado: 'SP',
                    cidade: 'São Paulo',
                    rua: 'Rua A',
                    numeroRua: '123',
                    cep: '01000-000',
                    documentos: [
                        { tipo: 'CPF', numero: '654321', dataEmissao: '2018-08-15' }
                    ],
                    telefones: [
                        { ddd: '11', numero: '98765-4321' },
                        { ddd: '11', numero: '91234-5678' }
                    ],
                    isDependente: true
                }
            ],
            isDependente: false
        }
    },
    {
        id: 2,
        acomodacao: {
            nomeAcomadacao: 'Quarto Standard',
            camaSolteiro: 2,
            camaCasal: 0,
            suite: 0,
            climatizacao: false,
            garagem: 0,
            quantidadeDisponivel: 10
        },
        dataInicio: '2023-11-15',
        dataFim: '2023-11-20',
        cliente: {
            id: 2,
            nome: 'Maria Oliveira',
            email: 'maria@example.com',
            dataNascimento: '1985-03-10',
            estado: 'RJ',
            cidade: 'Rio de Janeiro',
            rua: 'Rua B',
            numeroRua: '456',
            cep: '20000-000',
            documentos: [
                { tipo: 'cpf', numero: '987.654.321-00', dataEmissao: '2005-03-10' }
            ],
            telefones: [
                { ddd: '21', numero: '98765-4321' }
            ],
            dependentes: [],
            isDependente: false
        }
    },
    {
        id: 3,
        acomodacao: {
            nomeAcomadacao: 'Apartamento Família',
            camaSolteiro: 4,
            camaCasal: 2,
            suite: 2,
            climatizacao: true,
            garagem: 2,
            quantidadeDisponivel: 3
        },
        dataInicio: '2023-12-20',
        dataFim: '2023-12-30',
        cliente: {
            id: 3,
            nome: 'Carlos Souza',
            email: 'carlos@example.com',
            dataNascimento: '1978-10-20',
            estado: 'MG',
            cidade: 'Belo Horizonte',
            rua: 'Rua C',
            numeroRua: '789',
            cep: '30000-000',
            documentos: [
                { tipo: 'cpf', numero: '456.789.123-00', dataEmissao: '2000-10-20' }
            ],
            telefones: [
                { ddd: '31', numero: '98765-4321' }
            ],
            dependentes: [
                {
                    id: 13,
                    nome: 'Joana Souza',
                    email: 'joana@gmail.com',
                    dataNascimento: '2005-02-14',
                    estado: 'MG',
                    cidade: 'Belo Horizonte',
                    rua: 'Rua C',
                    numeroRua: '789',
                    cep: '30000-000',
                    documentos: [
                        { tipo: 'CPF', numero: '567890', dataEmissao: '2005-02-14' }
                    ],
                    telefones: [
                        { ddd: '31', numero: '98765-4321' }
                    ],
                    isDependente: true
                },
                {
                    id: 14,
                    nome: 'Lucas Souza',
                    email: 'lucassouza@gmail.com',
                    dataNascimento: '2008-06-18',
                    estado: 'MG',
                    cidade: 'Belo Horizonte',
                    rua: 'Rua C',
                    numeroRua: '789',
                    cep: '30000-000',
                    documentos: [
                        { tipo: 'CPF', numero: '678901', dataEmissao: '2008-06-18' }
                    ],
                    telefones: [
                        { ddd: '31', numero: '98765-4321' }
                    ],
                    isDependente: true
                }
            ],
            isDependente: false
        }
    },
    {
        id: 4,
        acomodacao: {
            nomeAcomadacao: 'Quarto Econômico',
            camaSolteiro: 1,
            camaCasal: 0,
            suite: 0,
            climatizacao: false,
            garagem: 0,
            quantidadeDisponivel: 15
        },
        dataInicio: '2023-10-05',
        dataFim: '2023-10-10',
        cliente: {
            id: 4,
            nome: 'Ana Pereira',
            email: 'ana@example.com',
            dataNascimento: '1992-07-15',
            estado: 'BA',
            cidade: 'Salvador',
            rua: 'Rua D',
            numeroRua: '321',
            cep: '40000-000',
            documentos: [
                { tipo: 'cpf', numero: '321.654.987-00', dataEmissao: '2012-07-15' }
            ],
            telefones: [
                { ddd: '71', numero: '98765-4321' }
            ],
            dependentes: [],
            isDependente: false
        }
    },
    {
        id: 5,
        acomodacao: {
            nomeAcomadacao: 'Suite Presidencial',
            camaSolteiro: 0,
            camaCasal: 1,
            suite: 1,
            climatizacao: true,
            garagem: 2,
            quantidadeDisponivel: 1
        },
        dataInicio: '2023-09-01',
        dataFim: '2023-09-05',
        cliente: {
            id: 5,
            nome: 'Pedro Santos',
            email: 'pedro@example.com',
            dataNascimento: '1980-05-25',
            estado: 'RS',
            cidade: 'Porto Alegre',
            rua: 'Rua E',
            numeroRua: '654',
            cep: '90000-000',
            documentos: [
                { tipo: 'cpf', numero: '654.321.987-00', dataEmissao: '2000-05-25' }
            ],
            telefones: [
                { ddd: '51', numero: '98765-4321' }
            ],
            dependentes: [],
            isDependente: false
        }
    },
    {
        id: 6,
        acomodacao: {
            nomeAcomadacao: 'Chalé',
            camaSolteiro: 2,
            camaCasal: 1,
            suite: 1,
            climatizacao: true,
            garagem: 1,
            quantidadeDisponivel: 4
        },
        dataInicio: '2023-11-10',
        dataFim: '2023-11-15',
        cliente: {
            id: 6,
            nome: 'Fernanda Lima',
            email: 'fernanda@example.com',
            dataNascimento: '1988-12-30',
            estado: 'PR',
            cidade: 'Curitiba',
            rua: 'Rua F',
            numeroRua: '987',
            cep: '80000-000',
            documentos: [
                { tipo: 'cpf', numero: '789.123.456-00', dataEmissao: '2008-12-30' }
            ],
            telefones: [
                { ddd: '41', numero: '98765-4321' }
            ],
            dependentes: [],
            isDependente: false
        }
    }
];

export default function ListarReservasPage() {
    const [reservas, setReservas] = useState<VisualizarReserva[]>(initialReservas);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [dataInicio, setDataInicio] = useState<string>('');
    const [dataFim, setDataFim] = useState<string>('');
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [selectedReserva, setSelectedReserva] = useState<VisualizarReserva | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleDataInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataInicio(event.target.value);
    };

    const handleDataFimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataFim(event.target.value);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleCardClick = (reserva: VisualizarReserva) => {
        setSelectedReserva(reserva);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedReserva(null);
    };

    const handleSave = (updatedReserva: VisualizarReserva) => {
        setReservas(reservas.map(reserva => reserva.id === updatedReserva.id ? updatedReserva : reserva));
    };

    const filteredReservas = reservas.filter(reserva => {
        const searchTermLower = searchTerm.toLowerCase();
        const isMatch = reserva.cliente.nome.toLowerCase().includes(searchTermLower) ||
            reserva.cliente.documentos.some(documento => documento.numero.includes(searchTermLower));

        const isWithinDateRange = (!dataInicio || new Date(reserva.dataInicio) >= new Date(dataInicio)) &&
            (!dataFim || new Date(reserva.dataFim) <= new Date(dataFim));

        return isMatch && isWithinDateRange;
    });

    return (
        <div className="divTotalCadastro">
            <h1 style={{ textAlign: "center", color: "white" }}> Listagem de reservas </h1>
            <Form className={`search-form ${showFilters ? 'extended' : ''}`} style={{ width: "50%", marginTop: "2%" }}>
                <InputGroup>
                    <FormControl
                        type="search"
                        placeholder="Pesquisar reservas pelo nome ou documento do cliente..."
                        className="mr-2"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button className="custom-filter-button" variant="outline-light" onClick={toggleFilters}>
                        <FaFilter className="custom-filter-icon" />
                    </Button>
                </InputGroup>
                {showFilters && (
                    <div className="filter-checkboxes mt-3">
                        <Form.Group controlId="dataInicio">
                            <Form.Label style={{ color: "white" }}>Data de Início</Form.Label>
                            <Form.Control
                                type="date"
                                value={dataInicio}
                                onChange={handleDataInicioChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="dataFim" className="mt-2">
                            <Form.Label style={{ color: "white" }}>Data de Fim</Form.Label>
                            <Form.Control
                                type="date"
                                value={dataFim}
                                onChange={handleDataFimChange}
                            />
                        </Form.Group>
                    </div>
                )}
            </Form>
            <Row className={`custom-row ${filteredReservas.length === 1 ? 'justify-content-center' : ''}`}>
                {filteredReservas.map(reserva => (
                    <Col key={reserva.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card className='custom-card2' onClick={() => handleCardClick(reserva)}>
                            <Card.Body>
                                <Card.Title style={{ color: "white" }}>{reserva.cliente.nome}</Card.Title>
                                <Card.Text style={{ color: "white", fontWeight: "500" }}>
                                    <strong>Data de Início:</strong> {reserva.dataInicio}<br />
                                    <strong>Data de Fim:</strong> {reserva.dataFim}<br />
                                    <strong>Acomodação:</strong> {reserva.acomodacao.nomeAcomadacao}<br />
                                </Card.Text>
                                <p className="verDetalhes"> Ver detalhes </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedReserva && (
                <VisualizarReservaModal
                    show={showModal}
                    onHide={handleCloseModal}
                    reserva={selectedReserva}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}