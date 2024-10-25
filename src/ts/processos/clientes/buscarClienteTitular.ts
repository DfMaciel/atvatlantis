import {Busca} from "../../interfaces/busca";
import Cliente from "../../modelos/cliente";
import Armazem from "../../dominio/armazem";

export default class BuscarClienteTitular implements Busca {
    private documentoCliente: string

    constructor(documentoCliente: string) {
        this.documentoCliente = documentoCliente
    }

    buscar(): Cliente | undefined {
        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes
        let cliente = clientes.find(cliente => cliente.Documentos.some(
        documento => documento.Numero === this.documentoCliente))
        return cliente || undefined
    }
}