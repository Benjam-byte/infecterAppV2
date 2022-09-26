import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface  CarouselData {
  titre: string;
  texte: string;
  state: boolean;
}

export interface CarouselDatas {
  tab: CarouselData[];
}

@Injectable({
  providedIn: 'root'
})
export class CarouCardService {

  obsCarouData = new Subject<CarouselDatas>();

  constructor() { }

  getData(){
    return this.obsCarouData.asObservable();
  }

  setData(data: CarouselDatas){
    this.obsCarouData.next(data);
  }





}
