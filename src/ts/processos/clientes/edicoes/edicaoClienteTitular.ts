import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import { Busca } from "../../../interfaces/busca";
import Cliente from "../../../modelos/cliente";
import BuscarCliente from "../../../buscas/buscarCliente";
import MenuCamposEdicaoClienteTitular from "../../../menus/menuCamposEdicaoClienteTitular";
import CadastroEnderecoTitular from "../../documentos/cadastroEnderecoTitular";
import Impressor from "../../../interfaces/impressor";
import ImpressorDocumentos from "../../../impressores/impressorDocumentos";
import TipoEdicaoDocumentosCliente from "../../documentos/tipoEdicaoDocumentosCliente";

export default class EdicaoClienteTitular extends Processo {
    private clientes: Cliente[]
    private documentoTitular: string
    private busca!: Busca
    private impressor!: Impressor
    constructor(documentoTitular: string) {
        super()
        this.documentoTitular = documentoTitular
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuCamposEdicaoClienteTitular
    }
    processar(): void {
        this.busca =  new BuscarCliente (this.documentoTitular)
        let cliente = this.busca.buscar()
        if (cliente) {
            let edicao = true
            while (edicao) {
                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero('Qual a opção desejada?')

                switch (this.opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto('Qual o novo nome?')
                        cliente.Nome = nome
                        break;
                    case 2:
                        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social?')
                        cliente.NomeSocial = nomeSocial
                        break;
                    case 3:
                        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento?')
                        cliente.DataNascimento = dataNascimento
                        break;
                    case 4:
                        this.processo = new CadastroEnderecoTitular(cliente)
                        this.processo.processar()
                    case 5:
                        this.processo = new TipoEdicaoDocumentosCliente(cliente)
                        this.processo.processar()
                        break;

                    case 0:
                        edicao = false
                        break;
                    default:
                        console.log('Opção não entendida... :(')
                }
            }
        }
        else {
            console.log('Cliente não encontrado!')
        }
    }
}