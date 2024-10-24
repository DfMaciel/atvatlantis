import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDependentes from "./impressorDependentes";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorTelefones";
import Verificador from "../interfaces/verificador";
import VerificaTitular from "../verificadores/verificaTitular"
import VerificaDependente from "../verificadores/verificaDependente";

export default class ImpressaorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor
    private verificador!: Verificador
    private isDependente: boolean

    constructor(cliente: Cliente, isDependente: boolean) {
        this.cliente = cliente
        this.isDependente = isDependente
    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        
        this.impressor =  new ImpressorTelefones(this.cliente.Telefones)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.verificador = new VerificaDependente(this.cliente)

        if (this.isDependente) {
            if (this.cliente.Titular == false) {
                impressao = impressao + `\n| Titular excluído`
                return impressao
            } 
            this.impressor = new ImpressaorCliente(this.cliente.Titular, false)
            impressao = impressao + `\n| Titular:`
            impressao = impressao + `\n${this.impressor.imprimir()}`
        }

        if (this.cliente.Dependentes.length > 0) {
            impressao = impressao + `\n| Dependentes:`
            this.impressor = new ImpressorDependentes(this.cliente.Dependentes, false)
            impressao = impressao + `\n${this.impressor.imprimir()}`
        }

        impressao = impressao + `\n****************************`
        return impressao
    }
}