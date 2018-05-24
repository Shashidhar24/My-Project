import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  userForm={
     uname:'',
     psw:''
  }

  onSubmit(userForm){
       if(userForm){
          console.log("navigated");
          this.route.navigate(['/cognos'])
          this.userForm={
             uname:'',
             psw:''
          }
       }
  }

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
