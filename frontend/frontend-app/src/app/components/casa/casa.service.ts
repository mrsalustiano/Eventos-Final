import { Casa } from './casa';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  baseUrl = "http://localhost:8080/casas"

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

  createCasa(casa: Casa): Observable<Casa>{
    return this.http.post<Casa>(this.baseUrl, casa).pipe(
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

  readCasaById(id: string): Observable<Casa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Casa>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }


  updateCasa(casa: Casa): Observable<Casa> {
    const url = `${this.baseUrl}/${casa.id}`
    return this.http.put<Casa>(url, casa).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  deleteCasa(id: number): Observable<Casa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Casa>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }

  updateCasaImagem(casa: Casa): Observable<Casa> {
    const url = `${this.baseUrl}/imagem/${casa.id}`
    return this.http.post<Casa>(url, casa).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e) )
    )
  }


}
