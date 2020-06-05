import { Cliente } from './../cliente/cliente';
import { Evento } from './../evento/evento';
export class Venda {
   
	cliente: Cliente;
	espetaculo: Evento;	
	quantidade: number;
    valor?: number;
    
    
}
