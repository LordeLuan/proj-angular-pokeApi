import { Moves } from './moves';
import { Move } from './move';
export class Pokemon {

  id?:number;
  name?:string;
  height?:string;
  weight?:string;
  types?:any;
  abilities?:any;
  moves?: Moves[];

  constructor(obj: Partial<Pokemon>){
    Object.assign(this , obj);
  }
}


