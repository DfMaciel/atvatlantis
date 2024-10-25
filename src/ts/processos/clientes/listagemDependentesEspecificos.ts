import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import ImpressorDependentes from "../../impressores/impressorDependentes";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import BuscarDependentesDoTitular from "./buscarDependentesDoTitular";

export default class ListagemDependentesEspecificos extends Processo {
    private impressor!: Impressor
    private documentoTitular: string
    constructor(documentoTitular: string) {
        super()
        this.documentoTitular = documentoTitular
    }

    processar(): void {
        console.clear()
        let busca = new BuscarDependentesDoTitular(this.documentoTitular)
        let dependentes = busca.buscarVarios()

        if (dependentes === undefined) {
            console.log('Dependentes não encontrados.')
            return
        }
        console.log('Listagem de dependentes de um titular especifico...')
        let impressor = new ImpressorDependentes(dependentes, false)
        console.log(impressor.imprimir())
        let entrada = this.entrada.receberTexto('Pressione qualquer botão para continuar...')
        if (entrada) {
            console.clear()
        }
    }
}