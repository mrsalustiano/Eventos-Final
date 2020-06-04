import { Router, ActivatedRoute } from '@angular/router';
import { CasaService } from './../casa.service';
import { Casa } from './../casa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-update',
  templateUrl: './casa-update.component.html',
  styleUrls: ['./casa-update.component.css']
})
export class CasaUpdateComponent implements OnInit {

  casa: Casa

  constructor(private service: CasaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readCasaById(id).subscribe(casa => {
      this.casa = casa
    })
  }

  updateCasa(): void {
    this.service.updateCasa(this.casa).subscribe(() => {
      this.service.showMessage('Casa de Show Alterada com sucesso')
      this.router.navigate(['/casas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/casas'])
  }
}
