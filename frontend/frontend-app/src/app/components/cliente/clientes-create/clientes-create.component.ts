import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  cliente: Cliente = {
    celular: '',
    cpf: '',
    email: '',
    dataNascimento: null,
    newsletter: false,
    nome: '',
    senhaCliente: '',
    logradouro: '',
    numero: null,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: ''
  }

  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  createCliente(): void {
    this.service.createCliente(this.cliente).subscribe(() => {
      this.service.showMessage('Cliente Criado com sucesso')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
