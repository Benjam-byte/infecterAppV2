import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Param, ParamService } from 'src/app/core/service/param.service';

@Component({
  selector: 'app-select-party-param',
  templateUrl: './select-party-param.page.html',
  styleUrls: ['./select-party-param.page.scss'],
})
export class SelectPartyParamPage implements OnInit {

  param: Param;

  constructor(private router: Router, private paramService: ParamService) {
    this.param = this.paramService.paramObj;
   }

  ngOnInit() { }

  navigateTo(){
    console.log(this.paramService.paramObj);
    this.router.navigate(['/select-bilan-sanguin']);
  }

  updateNuit(v: number){
    this.paramService.paramObj.dureenuit =v;
    this.param = this.paramService.paramObj;
  }
  updateNbJoueurs(v: number){
    this.paramService.paramObj.nbjoueurs =v;
    this.param =  this.paramService.paramObj;
  }
  updateNbGentil(v: number){
    this.paramService.paramObj.nbgentil =v;
    this.param = this.paramService.paramObj;
  }
  updateNbMechant(v: number){
    this.paramService.paramObj.nbmechant =v;
    this.param = this.paramService.paramObj;
  }
}
