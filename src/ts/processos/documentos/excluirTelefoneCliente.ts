import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Impressor from "../../interfaces/impressor";
import ImpressorTelefones from "../../impressores/impressorTelefones";
import Telefone from "../../modelos/telefone";

export default class ExcluirTelefoneCliente extends Processo {
    private cliente: Cliente
    private impressor!: Impressor
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }
    
    processar(): void {
        this.impressor = new ImpressorTelefones(this.cliente.Telefones)
        let dddTelefone = this.entrada.receberTexto('Insira o DDD do telefone que será excluído')
        let numeroTelefone = this.entrada.receberTexto('Insira o número do telefone')

        let index = this.cliente.Telefones.findIndex(telefone => 
            telefone.Numero === numeroTelefone && telefone.Ddd === dddTelefone)

        if (index !== -1) {
            this.cliente.Telefones.splice(index, 1);
            this.cliente.Dependentes.forEach(dependente => {
                let dependenteIndex = dependente.Telefones.findIndex(telefone =>
                    telefone.Numero === numeroTelefone && telefone.Ddd === dddTelefone);
                if (dependenteIndex !== -1) {
                    dependente.Telefones.splice(dependenteIndex, 1)
                }
            })
        
            console.log(`Telefone (${dddTelefone})${numeroTelefone} excluído com sucesso!`);
        } else {
            console.log(`Telefone com número (${dddTelefone})${numeroTelefone} não encontrado.`);
        }
        let entrada = this.entrada.receberTexto('Pressione qualquer botão para continuar...')
        if (entrada) {
            console.clear()
        }
    }
}