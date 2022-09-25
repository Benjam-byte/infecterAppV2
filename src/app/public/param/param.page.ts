import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.page.html',
  styleUrls: ['./param.page.scss'],
})
export class ParamPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navTo(page: string){
    this.router.navigate(['/'+page]);
  }

}
