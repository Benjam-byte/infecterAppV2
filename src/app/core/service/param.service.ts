import { Injectable } from '@angular/core';


export interface Param{
  dureenuit: number;
  nbjoueurs: number;
  nbgentil: number;
  nbmechant: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParamService {


  paramObj: Param = {dureenuit:2,nbjoueurs:20,nbgentil:19,nbmechant:1};

  constructor() { }


}
