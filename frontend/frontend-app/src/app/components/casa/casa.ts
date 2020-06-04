export interface Casa {
    id?: number;
    nome: string;
    imagemCasa?: BinaryType;
    logradouro?: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
}
