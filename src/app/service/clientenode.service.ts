import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import {Categoria} from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class ClientenodeService {
  URL="https://lab12ad.herokuapp.com/api/";
  constructor(private httpc: HttpClient) { 

  }

  getCategorias(): Observable<Categoria>{
    return this.httpc.get<Categoria>(this.URL+'categoria');
  }

  addCategorias(nombreF:string){
    let objetoCategoria ={nombre: nombreF}
    return this.httpc.post(this.URL+'categoria',objetoCategoria);
  }
}
