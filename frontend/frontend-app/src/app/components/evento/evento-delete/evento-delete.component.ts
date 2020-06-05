import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

  evento: Evento

  constructor(private service: EventoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readEventoById(id).subscribe(evento => {
      this.evento = evento
    })
  }

  deleteEvento(): void {
    
    this.service.deleteEvento(this.evento.id).subscribe(() => {
      this.service.showMessage('Evento Removido com Sucesso')
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/eventos'])
  }

}
