import Processo from "../../../abstracoes/processo";
import ImpressorDependentes from "../../../impressores/impressorDependentes";
import { BuscaLista } from "../../../interfaces/busca";
import Impressor from "../../../interfaces/impressor";
import BuscarDependentesDoTitular from "../../../buscas/buscarDependentesDoTitular";

export default class ListagemDependentesEspecificos extends Processo {
    private impressor!: Impressor
    private documentoTitular: string
    private buscaLista!: BuscaLista
    constructor(documentoTitular: string) {
        super()
        this.documentoTitular = documentoTitular
    }

    processar(): void {
        console.clear()
        this.buscaLista = new BuscarDependentesDoTitular(this.documentoTitular)
        let dependentes = this.buscaLista.buscarVarios()

        if (dependentes) {
            console.log('Listagem de dependentes de um titular especifico...')
            let impressor = new ImpressorDependentes(dependentes)
            console.log(impressor.imprimir())
        }
        
        let entrada = this.entrada.receberTexto('Pressione qualquer botão para continuar...')
        if (entrada) {
            console.clear()
        }
    }
}