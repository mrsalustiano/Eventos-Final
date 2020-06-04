import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Cliente } from './cliente';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/clientes"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string , isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  errorHandle(e: any): Observable<any> {
    this.showMessage('Ocorreu um Erro', true);
    return EMPTY;

  }

  createCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  readCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  readClienteById(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }


  updateCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

}
