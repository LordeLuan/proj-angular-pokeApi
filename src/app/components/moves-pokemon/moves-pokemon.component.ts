import { Move } from './../../models/move';
import { Subject } from 'rxjs';
import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ApiPokeService } from 'src/app/services/api-poke.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moves-pokemon',
  templateUrl: './moves-pokemon.component.html',
  styleUrls: ['./moves-pokemon.component.scss']
})
export class MovesPokemonComponent implements OnInit {

  pokemonMove: Pokemon = new Pokemon({});

  constructor(private route: ActivatedRoute,
    private pokeService: ApiPokeService) { }

  ngOnInit(): void {
    var poke = this.route.snapshot.paramMap.get('name');
    this.getPokemonMoves(poke);
  }

  getPokemonMoves(poke:any){
    // const poke = (event.target as HTMLInputElement)?.value;
    if (poke) {
    this.pokeService
    .getPokemon(poke)
    .subscribe(
      (response) => {
        //Next é um metodo do objeto do tipo Subject
        this.pokemonMove = response;
        console.log(response.moves)
        console.log(this.pokemonMove.moves)
      }
    )
  }
}

}
