import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import ImpressaorCliente from "../../impressores/impressorCliente";
import BuscarTitularDoDependente from "./buscarTitularDoDependente";

export default class ListagemTitularEspecifico extends Processo {
    private impressor!: Impressor
    private documentoDependente: string
    constructor(documentoDependente: string) {
        super()
        this.documentoDependente = documentoDependente
    }

    processar(): void {
        console.clear()
        let busca = new BuscarTitularDoDependente(this.documentoDependente)
        let cliente = busca.buscar()
        if (!cliente) {
            console.log("Titular não encontrado.")
            return
        }
        console.log("Listagem de titular de um dependente específico...")
        this.impressor = new ImpressaorCliente(cliente, false)
        console.log(this.impressor.imprimir())
    }
}