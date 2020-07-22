import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  private serviceUrl = 'http://localhost:5000/api/v1/employees';
  
  title = 'crudoperation';
    
}
