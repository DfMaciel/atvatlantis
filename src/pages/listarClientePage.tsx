import React, { useState } from 'react';
import { Card, Form, FormControl, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { VisualizarUsuario } from '../interface/usuarioInterface';
import { FaFilter } from 'react-icons/fa'; // Import filter icon
import VisualizarClienteModal from '../componentes/modal/visualizarClienteModal'; // Import the modal component

const initialClientes: VisualizarUsuario[] = [
    {
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
    },
    {
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
    },
    {
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
];

export default function ListarClientePage() {
    const [clientes, setClientes] = useState<VisualizarUsuario[]>(initialClientes);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [selectedCliente, setSelectedCliente] = useState<VisualizarUsuario | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const toggleFilters = () => {
        if (showFilters) {
            setSelectedFilter('');
        }
        setShowFilters(!showFilters);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFilter(event.target.value);
    };

    const handleCardClick = (cliente: VisualizarUsuario) => {
        setSelectedCliente(cliente);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCliente(null);
    };

    const filteredClientes = clientes.filter(cliente => {
        const searchTermLower = searchTerm.toLowerCase();

        if (selectedFilter === 'dependente') {
            // Filter to show all dependents of the user searched by document number
            const titular = clientes.find(cliente =>
                cliente.documentos.some(documento => documento.numero.includes(searchTermLower))
            );
            return titular ? titular.dependentes?.some(dependente => dependente.documentos.some(documento => documento.numero.includes(searchTermLower))) : false;
        } else if (selectedFilter === 'titular') {
            // Filter to show the user who is the titular of a dependent with the matching document number
            return cliente.dependentes?.some(dependente =>
                dependente.documentos.some(documento => documento.numero.includes(searchTermLower))
            );
        } else {
            // Default filter to show titulares
            const isMatch = cliente.nome.toLowerCase().includes(searchTermLower) ||
                cliente.documentos.some(documento => documento.numero.includes(searchTermLower)) ||
                cliente.dependentes?.some(dependente => dependente.nome.toLowerCase().includes(searchTermLower) ||
                    dependente.documentos.some(documento => documento.numero.includes(searchTermLower)));
            return isMatch;
        }
    });

    const dependentes = selectedFilter === 'dependente' ? filteredClientes.flatMap(cliente => cliente.dependentes || []) : filteredClientes;

    return (
        <div className="divTotalCadastro">
            <h1 style={{ textAlign: "center", color: "white" }}> Listagem de clientes </h1>
            <Form className={`search-form ${showFilters ? 'extended' : ''}`} style={{ width: "50%", marginTop: "2%" }}>
                <InputGroup>
                    <FormControl
                        type="search"
                        placeholder="Pesquisar clientes pelo documento..."
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
                    <div className="filter-checkboxes">
                        <Form.Check
                            type="radio"
                            label="Buscar dependentes de um titular"
                            name="filterOptions"
                            value="dependente"
                            checked={selectedFilter === 'dependente'}
                            onChange={handleFilterChange}
                            className="mt-2"
                        />
                        <Form.Check
                            type="radio"
                            label="Buscar titular de um dependente"
                            name="filterOptions"
                            value="titular"
                            checked={selectedFilter === 'titular'}
                            onChange={handleFilterChange}
                            className="mt-2"
                        />
                    </div>
                )}
            </Form>
            <Row className={`custom-row ${dependentes.length === 1 ? 'justify-content-center' : ''}`}>
                {dependentes.map(cliente => (
                    <Col key={cliente.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card className='custom-card2' onClick={() => handleCardClick(cliente)}>
                            <Card.Body>
                                <Card.Title style={{ color: "white" }}>{cliente.nome}</Card.Title>
                                <Card.Text style={{ color: "white", fontWeight: "500" }}>
                                    <strong>Email:</strong> {cliente.email}<br />
                                    <strong>Telefone:</strong> {cliente.telefones[0]?.ddd} {cliente.telefones[0]?.numero}<br />
                                </Card.Text>
                                <p className="verDetalhes"> Ver detalhes </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedCliente && (
                <VisualizarClienteModal
                    show={showModal}
                    onHide={handleCloseModal}
                    usuario={selectedCliente}
                />
            )}
        </div>
    );
}