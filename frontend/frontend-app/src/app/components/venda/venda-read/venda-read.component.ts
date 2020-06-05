import { ClienteService } from './../../cliente/cliente.service';
import { VendaService } from './../venda.service';
import { EventoService } from './../../evento/evento.service';
import { Venda } from './../venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {

  vendas: Venda[]
  displayedColumns = ['id' ,  'cliente' , 'espetaculo' ,  'quantidade' ,  'valor'   ]

  constructor(private  Cservice: ClienteService, private Eservice:  EventoService, private service: VendaService) { }

  ngOnInit(): void {
    this.service.readVenda().subscribe(vendas => {
      this.vendas = vendas
    })
  }

}
