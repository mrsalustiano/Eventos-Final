import { Router, ActivatedRoute } from '@angular/router';
import { CasaService } from './../casa.service';
import { Casa } from './../casa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-delete',
  templateUrl: './casa-delete.component.html',
  styleUrls: ['./casa-delete.component.css']
})
export class CasaDeleteComponent implements OnInit {

  casa: Casa

  constructor(private service: CasaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readCasaById(id).subscribe(casa => {
      this.casa = casa
    })
  }

  deleteCasa(): void {
    
    this.service.deleteCasa(this.casa.id).subscribe(() => {
      this.service.showMessage('Casa de Show Removida com Sucesso')
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/casas'])
  }


}
