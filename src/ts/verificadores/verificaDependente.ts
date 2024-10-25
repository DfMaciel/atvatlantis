import Verificador from "../interfaces/verificador";
import Cliente from "../modelos/cliente";

export default class VerificaDependente implements Verificador {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    verificar(): boolean {
        let verificacao = false
        if (this.cliente.Dependentes.length < 1) {
            verificacao = true
        }
        return verificacao
    }
}