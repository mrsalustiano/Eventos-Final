import { Casa } from './../casa';
import { Component, OnInit } from '@angular/core';
import { CasaService } from '../casa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-create',
  templateUrl: './casa-create.component.html',
  styleUrls: ['./casa-create.component.css']
})
export class CasaCreateComponent implements OnInit {
  casa: Casa = {
      nome:  '', 
      imagemCasa: null, 
      logradouro: '',
      numero: null,
      complemento: '',
      bairro: '',
      cep: '',
      cidade:  '',
      uf:  ''

  }
  
  constructor(private service: CasaService, private router: Router) { }

  ngOnInit(): void {
  }

  createCasa(): void {
    this.service.createCasa(this.casa).subscribe(() => {
      this.service.showMessage('Casa de Show Criada com sucesso')
      this.router.navigate(['/casas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/casas'])
  }
}
