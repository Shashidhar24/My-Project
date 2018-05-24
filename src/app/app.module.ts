import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {RouterModule} from  '@angular/router';



import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MycognosComponent } from './mycognos/mycognos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MycognosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {path:'',component:ProjectsComponent},
       {path:'cognos',component:MycognosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
