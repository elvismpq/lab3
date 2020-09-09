import { Component, OnInit } from '@angular/core';
import { ClientenodeService } from 'src/app/service/clientenode.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
  title= 'Categorias';
  categorias:any
  myFormCategoria: FormGroup;
  constructor(public servc:ClientenodeService) {
   }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.myFormCategoria = new FormGroup({
      nombreF: new FormControl(''),
    });
  }

  obtenerCategorias(){
    this.servc.getCategorias().subscribe(r=>{
      return this.categorias=r.categorias
    });
  }

  ingresarCategoria(){
    let nombre = this.myFormCategoria.value.nombreF;

    this.servc.addCategorias(nombre)
    .subscribe(r=>{
      this.obtenerCategorias()
      this.myFormCategoria = new FormGroup({
        nombreF: new FormControl('')
      });
    })
  }

}
