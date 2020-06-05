import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-crud',
  templateUrl: './evento-crud.component.html',
  styleUrls: ['./evento-crud.component.css']
})
export class EventoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToEventoCreate(): void{
    this.router.navigate(['/eventos/create'])

  }
}
