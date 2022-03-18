import { Move } from './move';
export class Moves {
  name?:string;
  move?: Move;

  constructor(obj: Partial<Moves>){
    Object.assign(this , obj);
  }
}
