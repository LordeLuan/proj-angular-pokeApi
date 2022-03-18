export class Move {

  name?:string;
  url?:string;

  constructor(obj: Partial<Move>){
    Object.assign(this , obj);
  }
}
