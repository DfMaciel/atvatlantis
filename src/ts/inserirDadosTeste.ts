import Processo from "./abstracoes/processo";
import Cliente from "./modelos/cliente";
import Armazem from "./dominio/armazem";
import Endereco from "./modelos/endereco";
import Telefone from "./modelos/telefone";
import Documento from "./modelos/documento";
import { TipoDocumento } from "./enumeracoes/TipoDocumento";

export default class InserirDadosTeste extends Processo {
    constructor() {
        super()
    }

    processar(): void {
        let armazem = Armazem.InstanciaUnica
        
        let titular = new Cliente("Titular Nome", "Titular Nome Social", new Date(1980, 1, 1));
        let endereco = new Endereco("Rua A", "123", "Bairro B", "Cidade C", "Estado D", "12345-678");
        let telefone = new Telefone("11", "987654321");
        let documento = new Documento("12345678900", TipoDocumento.CPF, new Date(2000, 1, 1));

        titular.Endereco = endereco;
        titular.Telefones = [telefone];
        titular.Documentos = [documento];
        titular.IsTitular = true;

        armazem.Clientes.push(titular);

        let dependente = new Cliente("Dependente Nome", "Dependente Nome Social", new Date(2000, 1, 1));
        dependente.Titular = titular;
        dependente.Endereco = endereco;
        dependente.Telefones = [telefone];
        dependente.Documentos = [documento];
        dependente.IsTitular = false;

        titular.Dependentes.push(dependente);
        dependente.Titular = titular;
        armazem.Clientes.push(dependente);

        let titular2 = new Cliente("Titular Novo", "Titular Novo Social", new Date(1980, 1, 1));
        let endereco2 = new Endereco("Rua A", "123", "Bairro B", "Cidade C", "Estado D", "12345-678");
        let telefone2 = new Telefone("11", "987654321");
        let documento2 = new Documento("12345678900", TipoDocumento.CPF, new Date(2000, 1, 1));

        titular2.Endereco = endereco2;
        titular2.Telefones = [telefone2];
        titular2.Documentos = [documento2];
        titular2.IsTitular = true;

        armazem.Clientes.push(titular2);
    }
}