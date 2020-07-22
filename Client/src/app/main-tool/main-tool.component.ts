import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-tool',
  templateUrl: './main-tool.component.html',
  styleUrls: ['./main-tool.component.scss']
})
export class MainToolComponent implements OnInit {
  private serviceUrl = 'http://localhost:5000/api/v1/employees';
  users : any;
  constructor(private http:HttpClient) { }

  title = 'crudoperation';
  

  ngOnInit() {
    this.http.get(this.serviceUrl).subscribe((data) => this.users = data);
  }   

}
