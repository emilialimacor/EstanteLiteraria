import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/servicos/livro.service';
import { Router } from '@angular/router';
import { Livro } from 'src/app/livro';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Livros!: Livro []

  isModal!:boolean

  idExcluir!:any

  idProcurado!:any

  constructor(private service:LivroService,
              private router:Router) { }

  ngOnInit(): void {
    this.listarLivros()
  }

  listarLivros(){
    this.service.listar().subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.Livros = <any>resultado
      },
      error: (err) => console.error(err),
      complete: () => console.info('Complete')
    })
  }

  editar(id:any){
    this.router.navigate([`/edit/${id}`])
  }

  mostrarModal(id:any){
    this.isModal = true
    this.idExcluir = id
  }

  cancelarAcao(){
    this.isModal = false
  }

  confirmarAcao(){
    this.service.deletarLivro(this.idExcluir).subscribe({
          next: (resultado) => {
            console.log('Removido')
            this.listarLivros()
          },
          error: (erro) => console.error(erro),
          complete: () => {
            console.info('complete')
            this.isModal=false
          }
    })
  }
}
