import { EventoService } from './../evento.service';
import { Evento } from './../evento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  eventos: Evento[]
  displayedColumns = ['id' ,  'nome' ,  'capacidade', 'descricao',   'faixaEtaria', 'dataEspetaculo', 'valor', 'casa', 'action'  ]

  
  constructor(private  service: EventoService) { }

  ngOnInit(): void {
    this.service.readEvento().subscribe(eventos => {
      this.eventos = eventos
    })
  }

}
