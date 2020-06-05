import { Evento } from './evento';
import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Casa } from '../casa/casa';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = "http://localhost:8080/espetaculos"

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
    this.showMessage('Ocorreu um Erro' + e, true);
    return EMPTY;

  }

  createEvento(evento: Evento): Observable<Evento>{
    console.log(evento)
    return this.http.post<Evento>(this.baseUrl, evento).pipe(
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

  readEventoById(id: string): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Evento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }


  updateEvento(casa: Evento): Observable<Evento> {
    const url = `${this.baseUrl}/${casa.id}`
    return this.http.put<Evento>(url, casa).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  deleteEvento(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Evento>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  updateEventoImagem(evento: Evento): Observable<Evento> {
    const url = `${this.baseUrl}/imagem/${evento.id}`
    return this.http.post<Evento>(url, evento).pipe(
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

}
