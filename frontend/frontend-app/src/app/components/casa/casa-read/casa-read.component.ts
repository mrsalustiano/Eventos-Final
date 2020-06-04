import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa';
import { CasaService } from '../casa.service';

@Component({
  selector: 'app-casa-read',
  templateUrl: './casa-read.component.html',
  styleUrls: ['./casa-read.component.css']
})
export class CasaReadComponent implements OnInit {

  casas: Casa[]
  displayedColumns = ['id' ,  'nome' ,  'cidade', 'cep',  'uf', 'action'  ]

  constructor(private  service: CasaService) { }

  ngOnInit(): void {
    this.service.readCasa().subscribe(casas => {
      this.casas = casas
    })
  }

}
