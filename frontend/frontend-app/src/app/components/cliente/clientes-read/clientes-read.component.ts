import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  clientes: Cliente[]
  displayedColumns = ['id' ,  'nome' , 'cpf' ,  'celular' ,  'email' ,  'cidade' ,  'uf' , 'cep' , 'dataNascimento' , 'action'  ]



  constructor(private  service: ClienteService) { }

  ngOnInit(): void {
    this.service.readCliente().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
