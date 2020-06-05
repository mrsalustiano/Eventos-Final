import { CasaService } from './../../casa/casa.service';
import { Casa } from './../../casa/casa';
import { Router } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  evento: Evento = {
    faixaEtaria: '',
    dataEspetaculo: null,
    valor: null,
    capacidade: null,
    destaque: null,
    imagemCasa: null,
    casa: {
      Casa: null
    },
    descricao: '',
    nome: ''
  }

  casa: Casa[]

  constructor(private service: EventoService, private serv: CasaService, private router: Router) { }

  ngOnInit(): void {
    this.serv.readCasa().subscribe(casas => {

      this.casa = casas
    })

  }

  createEvento(): void {

    this.service.createEvento(this.evento).subscribe(() => {
      console.log(this.evento)
      this.service.showMessage('Evento Criado com sucesso')
      this.router.navigate(['/eventos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/eventos'])
  }

}
