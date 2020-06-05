import { Venda } from './venda';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Casa } from '../casa/casa';
import { map, catchError } from 'rxjs/operators';
import { Evento } from '../evento/evento';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  baseUrl = "http://localhost:8080/vendas"

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
    console.log(e);
    this.showMessage('Ocorreu um Erro' , true);
    return EMPTY;

  }

  createVenda(venda: Venda): Observable<Venda>{
    return this.http.post<Venda>(this.baseUrl, venda).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }



  readVendaById(id: string): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Venda>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }


  readCasa(): Observable<Casa[]>{
    return this.http.get<Casa[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  readEvento(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

}
