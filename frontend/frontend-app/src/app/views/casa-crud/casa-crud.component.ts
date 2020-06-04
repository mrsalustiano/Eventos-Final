import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-crud',
  templateUrl: './casa-crud.component.html',
  styleUrls: ['./casa-crud.component.css']
})
export class CasaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigateToCasaCreate(): void{
    this.router.navigate(['/casas/create'])

  }
}
