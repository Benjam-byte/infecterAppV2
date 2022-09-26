import { Component, OnInit, OnDestroy } from '@angular/core';
import { GestureService } from 'src/app/shared/services/gesture.service';
import * as rules from 'src/assets/rules.json';
import { CarouselDatas } from 'src/app/shared/services/carou-card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  activDataId: number;
  rules: CarouselDatas;
  obs: Subscription;
  isTouched: boolean;

  constructor(private gestureService: GestureService) {
    this.activDataId = 0;
    this.isTouched = false;
    this.rules = rules;
    this.gestureService.initSwipe(window.document);
   }

  ngOnInit() {
    this.rules = rules;
    this.obs = this.gestureService.getObsDelta().subscribe(value => {
      if(value >= 50 && this.activDataId < this.rules.tab.length-1 && !this.isTouched){
        this.activDataId = this.activDataId + 1;
        this.isTouched = true;
      }else if(value <= -50 && this.activDataId > 0 && !this.isTouched){
        this.activDataId = this.activDataId -1;
        this.isTouched = true;
      }
    });
  }

  ngOnDestroy(){
    this.obs.unsubscribe();
  }

}
