import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wm-logo',
  templateUrl: './wm-logo.component.html',
  styleUrls: ['./wm-logo.component.scss'],
})
export class WmLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  backHome(){
    this.router.navigate(['/']);
  }

}
