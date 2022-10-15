import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Borne{
  min: number;
  max: number;
}

@Component({
  selector: 'app-line-selector',
  templateUrl: './line-selector.component.html',
  styleUrls: ['./line-selector.component.scss'],
})
export class LineSelectorComponent implements OnInit {

  @Input() borne: Borne;
  @Input() name: string;
  @Input() value: number;

  @Output() valParam = new EventEmitter<number>();

  public param!: number;

  constructor() {
    this.param = 0;
   }

  ngOnInit() {
    this.param = this.value;
  }


  valueChanged(){
    this.valParam.emit(this.param);
  }

}
