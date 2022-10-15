import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-param-selector',
  templateUrl: './param-selector.component.html',
  styleUrls: ['./param-selector.component.scss'],
})
export class ParamSelectorComponent implements OnInit {

  @Input() name: string;
  @Input() value: number;
  @Input() valMax: number;

  @Output() valParam = new EventEmitter<number>();

  param: number;

  constructor() {
    this.value =0;
   }

  ngOnInit() {
    this.param = this.value;
  }

  increment(val: boolean){
    if(!val && this.param > 0){
      this.param = this.param -1;
    }else if(val && this.param < this.valMax){
      this.param = this.param +1;
    }
    this.clicked();
  }

  clicked(){
    this.valParam.emit(this.param);
  }

}
