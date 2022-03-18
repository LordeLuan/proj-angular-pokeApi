import { MovesPokemonComponent } from './components/moves-pokemon/moves-pokemon.component';
import { ApiPokeComponent } from './components/api-poke/api-poke.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokeApi', component: ApiPokeComponent },
  { path: 'movesPoke/:name', component: MovesPokemonComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
