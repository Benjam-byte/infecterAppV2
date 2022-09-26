import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-line',
  templateUrl: './point-line.component.html',
  styleUrls: ['./point-line.component.scss'],
})
export class PointLineComponent implements OnInit {

  @Input() nbPoint!: number;
  @Input() actifId!: number;

  fakeArray: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.fakeArray = Array(this.nbPoint).fill(0);
  }

}
