import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {
 
  cliente: Cliente

  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readClienteById(id).subscribe(cliente => {
      this.cliente = cliente
    })

  }

  updateCliente(): void {
    this.service.updateCliente(this.cliente).subscribe(() => {
      this.service.showMessage('Cliente Alterado com sucesso')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
