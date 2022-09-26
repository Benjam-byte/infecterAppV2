import { Component, Input, OnInit } from '@angular/core';
import { CarouselDatas } from '../../services/carou-card.service';

@Component({
  selector: 'app-caroussel-card',
  templateUrl: './caroussel-card.component.html',
  styleUrls: ['./caroussel-card.component.scss'],
})
export class CarousselCardComponent implements OnInit {

  @Input() activDataId: number;
  @Input() rules: CarouselDatas;

  constructor() {
   }

  ngOnInit() {
  }

}
