import { Move } from './../../models/move';
import { ApiPokeService } from './../../services/api-poke.service';
import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-api-poke',
  templateUrl: './api-poke.component.html',
  styleUrls: ['./api-poke.component.scss'],
})
export class ApiPokeComponent implements OnInit {
  pokemon: Pokemon = {};

  urlSpriteFront: string = "";
  urlSpriteFrontShiny: string = "";

  // Forma de salvar a habilidade para usar no html
  // habilidade:any;

  constructor(private pokeService: ApiPokeService) {}

  ngOnInit(): void {
    // this.loadPokemon('dragonite');
    // console.log(this.pokemon$)
  }

  loadPokemon(event: any) {
    const poke = (event.target as HTMLInputElement)?.value;
    if (poke) {
      this.pokeService.getPokemon(poke).subscribe((respostaApi) => {
        console.log(respostaApi);
        // Atribui o retorno da API ao modelo criado, que é as informações que queremos
        this.pokemon = respostaApi;
        this.urlSpriteFront = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemon.id + ".png"
        this.urlSpriteFrontShiny = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + this.pokemon.id + ".png"

        // console.log(this.pokemon.types)
        // Atribui o array que retorna a uma contante
        // const move = this.pokemon.types;

        // For para percorrer o array que é retornado do Types da API.
        // for (let index = 0; index < this.pokemon.types.length; index++) {
        //   const element = this.pokemon.types[index];
        //   // console.log(element.type.name);
        //   this.habilidade=element;
        // }
      }
      );
    } else{
      this.pokemon = {};
    }
    return poke;
  }



}
