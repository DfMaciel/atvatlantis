import { VisualizarUsuario } from "../../interface/usuarioInterface";
import { Form, FloatingLabel, Accordion, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

interface  VisualizarClienteModalProps {
    show: boolean;
    onHide: () => void;
    usuario: VisualizarUsuario;
}

export default function VisualizarClienteModal (props: VisualizarClienteModalProps) {
    const { show, onHide, usuario} = props;
    const [nome, setNome] = useState(usuario.nome);
    const [email, setEmail] = useState(usuario.email);
    const [dataNascimento, setDataNascimento] = useState(usuario.dataNascimento);
    const [estado, setEstado] = useState(usuario.estado);
    const [cidade, setCidade] = useState(usuario.cidade);
    const [rua, setRua] = useState(usuario.rua);
    const [numeroRua, setNumeroRua] = useState(usuario.numeroRua);
    const [cep, setCep] = useState(usuario.cep);
    const [documentos, setDocumentos] = useState(usuario.documentos);
    const [telefones, setTelefones] = useState(usuario.telefones);
    const [isDependente, setIsDependente] = useState(usuario.isDependente);
    const [dependentes, setDependentes] = useState(usuario.dependentes);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setNome(usuario.nome);
        setEmail(usuario.email);
        setDataNascimento(usuario.dataNascimento);
        setEstado(usuario.estado);
        setCidade(usuario.cidade);
        setRua(usuario.rua);
        setNumeroRua(usuario.numeroRua);
        setCep(usuario.cep);
        setDocumentos(usuario.documentos);
        setTelefones(usuario.telefones);
    }, [usuario]);

    const handleSave = () => {
        const updatedUsuario: VisualizarUsuario = {
            ...usuario,
            nome,
            email,
            dataNascimento,
            estado,
            cidade,
            rua,
            numeroRua,
            cep,
            documentos,
            telefones
        };
        onHide();
    };

    const handleDocumentoChange = (index: number, field: string, value: string) => {
        const updatedDocumentos = documentos.map((documento, i) => (
            i === index ? { ...documento, [field]: value } : documento
        ));
        setDocumentos(updatedDocumentos);
    };

    const handleTelefoneChange = (index: number, field: string, value: string) => {
        const updatedTelefones = telefones.map((telefone, i) => (
            i === index ? { ...telefone, [field]: value } : telefone
        ));
        setTelefones(updatedTelefones);
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };
    
    return (
           
            <Modal show={show} onHide={onHide} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes do Cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="divTotalCadastro"> */}
                    {isDependente ? (
                        <Form className="formCadastro">
                            <Form.Label style={{ color: "black", fontSize: "1.8em", fontWeight: "500" }}>Informações gerais:</Form.Label>
                            <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingNascimento" label="Data de nascimento" className="mb-3">
                                <Form.Control
                                    type="date"
                                    placeholder="Data de nascimento"
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <Form.Label style={{ color: "black", fontSize: "1.8em", fontWeight: "500" }}>Documentos:</Form.Label>
                            {usuario.documentos.map((documento, index) => (
                                <div key={index} className="d-flex align-items-center mb-3">
                                    <div className="flex-grow-1">
                                        <FloatingLabel controlId={`floatingTipoDocumento${index}`} label="Tipo de Documento" className="mb-3">
                                            <Form.Select
                                                aria-label="Tipo de Documento"
                                                value={documento.tipo}
                                                onChange={(e) => handleDocumentoChange(index, 'tipo', e.target.value)}
                                                disabled={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            >
                                                <option value="cpf">CPF</option>
                                                <option value="rg">RG</option>
                                                <option value="passaporte">Passaporte</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel controlId={`floatingNumeroDocumento${index}`} label="Número do documento" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Número do documento"
                                                value={documento.numero}
                                                onChange={(e) => handleDocumentoChange(index, 'numero', e.target.value)}
                                                readOnly={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel controlId={`floatingDataEmissao${index}`} label="Data de emissão" className="mb-3">
                                            <Form.Control
                                                type="date"
                                                placeholder="Data de emissão"
                                                value={documento.dataEmissao}
                                                onChange={(e) => handleDocumentoChange(index, 'dataEmissao', e.target.value)}
                                                readOnly={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            ))}
                        </Form>
                    ):(
                        <Form className="formCadastro">
                            <Form.Label style={{ color: "black", fontSize: "1.8em", fontWeight: "500" }}>Informações gerais:</Form.Label>
                            <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingNascimento" label="Data de nascimento" className="mb-3">
                                <Form.Control
                                    type="date"
                                    placeholder="Data de nascimento"
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <Form.Label style={{ color: "black", fontSize: "1.8em", fontWeight: "500" }}>Endereço:</Form.Label>
                            <FloatingLabel controlId="floatingEstado" label="Estado" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Estado"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingCidade" label="Cidade" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Cidade"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingRua" label="Rua" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Rua"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingNumeroRua" label="Número" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Número"
                                    value={numeroRua}
                                    onChange={(e) => setNumeroRua(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingCep" label="CEP" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="CEP"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    readOnly={!isEditing}
                                    className={!isEditing ? 'read-only' : ''}
                                />
                            </FloatingLabel>
                            <Form.Label style={{ color: "black", fontSize: "1.8em", fontWeight: "500" }}>Documentos:</Form.Label>
                            {usuario.documentos.map((documento, index) => (
                                <div key={index} className="d-flex align-items-center mb-3">
                                    <div className="flex-grow-1">
                                        <FloatingLabel controlId={`floatingTipoDocumento${index}`} label="Tipo de Documento" className="mb-3">
                                            <Form.Select
                                                aria-label="Tipo de Documento"
                                                value={documento.tipo}
                                                onChange={(e) => handleDocumentoChange(index, 'tipo', e.target.value)}
                                                disabled={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            >
                                                <option value="cpf">CPF</option>
                                                <option value="rg">RG</option>
                                                <option value="passaporte">Passaporte</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                        <FloatingLabel controlId={`floatingNumeroDocumento${index}`} label="Número do documento" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Número do documento"
                                                value={documento.numero}
                                                onChange={(e) => handleDocumentoChange(index, 'numero', e.target.value)}
                                                readOnly={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            />
                                        </FloatingLabel>
                                        <FloatingLabel controlId={`floatingDataEmissao${index}`} label="Data de emissão" className="mb-3">
                                            <Form.Control
                                                type="date"
                                                placeholder="Data de emissão"
                                                value={documento.dataEmissao}
                                                onChange={(e) => handleDocumentoChange(index, 'dataEmissao', e.target.value)}
                                                readOnly={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            ))}
                            <Form.Label style={{ color: "black", fontSize: "1.8em", fontWeight: "500" }}>Telefones:</Form.Label>
                            {usuario.telefones.map((telefone, index) => (
                                <div key={index} className="d-flex align-items-center mb-3">
                                    <div className="flex-grow-1">
                                    <FloatingLabel controlId={`floatingDdd${index}`} label="DDD" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="DDD"
                                            value={telefone.ddd}
                                            onChange={(e) => handleTelefoneChange(index, 'ddd', e.target.value)}
                                            readOnly={!isEditing}
                                            className={!isEditing ? 'read-only' : ''}
                                        />
                                        </FloatingLabel>
                                        <FloatingLabel controlId={`floatingNumeroTelefone${index}`} label="Número" className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Número"
                                                value={telefone.numero}
                                                onChange={(e) => handleTelefoneChange(index, 'numero', e.target.value)}
                                                readOnly={!isEditing}
                                                className={!isEditing ? 'read-only' : ''}
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            ))}
                        </Form>
                    )}
                    {/* </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                    <div className="botaoEditarUsuario">
                        {isEditing ? (
                            <>
                                <Button onClick={handleSave}>Salvar</Button>
                                <Button onClick={handleSave}>Excluir</Button>
                            </>
                        ) : (
                            <Button onClick={toggleEditMode}>Editar</Button>
                        )}
                    </div>
                </Modal.Footer>
            </Modal>
    )
}