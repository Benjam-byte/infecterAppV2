import { Injectable } from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestureService {

  obsGesture= new Subject<number>();
  gesture: any;

  constructor(private gestureCtrl: GestureController) { }

  initSwipe(app: Node){
    this.gesture = this.gestureCtrl.create({
      gestureName:'swipe',
      el: app,
      onMove: detail => {this.onMove(detail);}
    });
    this.gesture.enable();
  }

  onMove(detail) {
    this.obsGesture.next(detail.deltaX);
  }

  getObsDelta(){
    return this.obsGesture.asObservable();
  }



}
