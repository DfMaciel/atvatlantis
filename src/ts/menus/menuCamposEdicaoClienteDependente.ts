import Menu from "../interfaces/menu";

export default class MenuCamposEdicaoClienteDependente implements Menu {
    mostrar():void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual campo deseja alterar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Nome`)
        console.log(`| 2 - Nome Social`)
        console.log(`| 3 - Data de nascimento`)
        console.log(`| 4 - Documentos`)
        console.log(`----------------------`)
        console.log(`| 0 - Voltar`)
    }
}