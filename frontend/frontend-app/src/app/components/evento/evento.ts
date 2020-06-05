import { Casa } from './../casa/casa';
export class Evento {

    id?: number;
    faixaEtaria: string;
	dataEspetaculo: Date;
	valor: number;
	capacidade: number;
	destaque: number;
	imagemCasa: Blob;
	casa: Casa ;
	descricao: string;
	nome: string;
	
}
