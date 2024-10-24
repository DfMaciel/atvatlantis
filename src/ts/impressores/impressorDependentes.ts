import Cliente from "../modelos/cliente";
import Impressor from "../interfaces/impressor";
import ImpressaorCliente from "./impressorCliente";

export default class ImpressorDependentes implements Impressor {
    private dependentes: Cliente[]
    private impressor!: Impressor
    private impressaoSozinha: boolean

    constructor(dependentes: Cliente[], impressaoSozinha: boolean) {
        this.dependentes = dependentes
        this.impressaoSozinha = impressaoSozinha
    }

    imprimir(): string {
        let impressao = ''
        for (let index = 0; index < this.dependentes.length; index++) {
            this.impressor = new ImpressaorCliente(this.dependentes[index], this.impressaoSozinha)
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }
        }
        return impressao
    }
}