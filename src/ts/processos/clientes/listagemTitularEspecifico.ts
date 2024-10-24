import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import ImpressaorCliente from "../../impressores/impressorCliente";

export default class ListagemTitularEspecifico extends Processo {
    private impressor!: Impressor
    private documentoDependente: string
    private cliente: Cliente | undefined
    constructor(documentoDependente: string) {
        super()
        this.documentoDependente = documentoDependente
        this.cliente = Armazem.InstanciaUnica.Clientes.find(
            cliente => cliente.Dependentes.some(
            dependente => dependente.Documentos.some(
            documento => documento.Numero === documentoDependente)))
    }

    processar(): void {
        if (this.cliente === undefined) {
            console.log('Titular não encontrado.')
            return
        }
        console.log("Listagem de titular de um dependente específico...")
        this.impressor = new ImpressaorCliente(this.cliente, false)
        console.log(this.impressor.imprimir())
    }
}