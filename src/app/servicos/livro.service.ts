import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = "http://localhost:3000/Livros"

  constructor(private http:HttpClient) { }

  listar():Observable<any>{
    return this.http.get<any>(this.API)
  }

  addLivro(livro:Livro){
    return this.http.post(this.API,livro)
  }

  getUmLivro(id:any){
    return this.http.get<any>(this.API + '/' + id)
  }

  deletarLivro(id:any){
    return this.http.delete(this.API + '/' + id)
  }
  editarLivro(id: any, livro:Livro){
    return this.http.put(this.API + '/' + id, livro)
  }
}
