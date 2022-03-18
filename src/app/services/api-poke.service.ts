import { Move } from './../models/move';
import { Pokemon } from './../models/pokemon';
import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {

  constructor(private http:HttpClient) { }

  getPokemon(poke:string){
    const urlGet = `${environment.urlApi}${poke}`;
    return this.http.get<Pokemon>(urlGet);
  }
  getPokemonMoves(poke:string){
    const urlGet = `${environment.urlApi}${poke}`;
    return this.http.get<Move>(urlGet);
  }
}
