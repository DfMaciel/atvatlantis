import Processo from "../../../abstracoes/processo";
import Impressor from "../../../interfaces/impressor";
import ImpressaorCliente from "../../../impressores/impressorCliente";
import BuscarTitularDoDependente from "../../../buscas/buscarTitularDoDependente";
import { Busca } from "../../../interfaces/busca";

export default class ListagemTitularEspecifico extends Processo {
    private impressor!: Impressor
    private documentoDependente: string
    private busca!: Busca
    constructor(documentoDependente: string) {
        super()
        this.documentoDependente = documentoDependente
    }

    processar(): void {
        console.clear()
        this.busca = new BuscarTitularDoDependente(this.documentoDependente)
        let cliente = this.busca.buscar()
        if (!cliente) {
            console.log("Titular não encontrado.")
            return
        }
        console.log("Listagem de titular de um dependente específico...")
        this.impressor = new ImpressaorCliente(cliente)
        console.log(this.impressor.imprimir())
    }
}