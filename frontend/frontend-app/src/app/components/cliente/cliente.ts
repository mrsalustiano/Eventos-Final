export interface Cliente {

    id?: number;
    celular: string;
    cpf: string;
    email: string;
    dataNascimento: Date,
	newsletter: boolean;
	nome: string;
	senhaCliente: string;
	logradouro: string;
	numero: number;
	complemento?: string;
	bairro: string;
	cidade: string;
	uf: string;
	cep: string;
}
