import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {
  
  cliente: Cliente

  constructor(private service: ClienteService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readClienteById(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  deleteCliente(): void {
    
    this.service.deleteCliente(this.cliente.id).subscribe(() => {
      this.service.showMessage('Cliente Removido com Sucesso')
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
