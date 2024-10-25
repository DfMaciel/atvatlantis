import Cliente from "../../modelos/cliente"
import Armazem from "../../dominio/armazem"
import {Busca} from "../../interfaces/busca"

export default class BuscarTitularDoDependente implements Busca {
    private documentoDependente: string

    constructor(documentoDependente: string) {
        this.documentoDependente = documentoDependente
    }

    buscar(): Cliente | undefined {
        let armazem = Armazem.InstanciaUnica
        let clientes = armazem.Clientes
        let cliente = clientes.find(cliente => cliente.Dependentes.some(
        dependente => dependente.Documentos.some(
        documento => documento.Numero === this.documentoDependente)))
        return cliente || undefined
    }
}