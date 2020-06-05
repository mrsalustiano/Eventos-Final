import { Router, ActivatedRoute } from '@angular/router';
import { CasaService } from './../../casa/casa.service';
import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { Casa } from '../../casa/casa';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {

  evento: Evento
  idCasa = 0;
  casas: Casa[]

  constructor(private service: EventoService, private serv: CasaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Preenche select com as casas
    this.serv.readCasa().subscribe(casas => {
      this.casas = casas
    })
    //busca o evento para editar
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readEventoById(id).subscribe(evento => {
      this.evento = evento
    })

  }

  updateEvento(): void {
    const casa = new Casa();
    casa.id = this.idCasa;
    this.evento.casa = casa;
    
    this.service.updateEvento(this.evento).subscribe(() => {
      this.service.showMessage('Evento Alterado com sucesso')
      this.router.navigate(['/eventos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/eventos'])
  }

}
