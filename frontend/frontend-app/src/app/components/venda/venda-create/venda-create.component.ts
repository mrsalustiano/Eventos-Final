import { ClienteService } from './../../cliente/cliente.service';
import { Router } from '@angular/router';
import { CasaService } from './../../casa/casa.service';
import { EventoService } from './../../evento/evento.service';
import { VendaService } from './../venda.service';
import { Component, OnInit } from '@angular/core';
import { Casa } from '../../casa/casa';
import { Evento } from '../../evento/evento';
import { Venda } from '../venda';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
  styleUrls: ['./venda-create.component.css']
})
export class VendaCreateComponent implements OnInit {

  venda: Venda = {
  	cliente: null,
	  espetaculo: null,
	  quantidade: null,
    valor: null
  }

  idCliente = 0;
  clientes: Cliente[]
  idEvento = 0;
  eventos: Evento[]


  constructor(private Eservice: EventoService, private Cservice: ClienteService, 
    private service: VendaService, private router: Router) { }

  ngOnInit(): void {
    this.Cservice.readCliente().subscribe(clientes => {
        this.clientes = clientes
    })
    this.Eservice.readEvento().subscribe(eventos => {
      this.eventos = eventos
  })
  }
  
  createVenda(): void {
    
    const cliente = new Cliente();
    cliente.id = this.idCliente;
    this.venda.cliente = cliente;
    
    
    const evento = new Evento();
    evento.id = this.idEvento;
    this.venda.espetaculo = evento;
    
    this.service.createVenda(this.venda).subscribe(() => {
      this.service.showMessage('Venda  Realizada com sucesso')
      this.router.navigate([''])
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }



}
