import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycognos',
  templateUrl: './mycognos.component.html',
  styleUrls: ['./mycognos.component.css']
})
export class MycognosComponent implements OnInit {
  geo:string='';
  quarter:string='';
  vehicle:string='Bike';
  flag:boolean = false;
  save(){
    this.flag  = true
    //console.log(this.geo,this.quarter,this.vehicle);
  }

  constructor() { }

  ngOnInit() {
  }

}
