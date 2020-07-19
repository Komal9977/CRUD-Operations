import { Component, HostBinding, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private serviceUrl = 'http://localhost:5000/api/v1/employees';
  datatable2 : any;

  constructor(private http:HttpClient) { }

  title = 'crudoperation';
    // ngOnInit() {
    //   this.http.get(this.serviceUrl).subscribe(data => {
    //     console.log("Employee Data", data);
    //     this.datatable = data;
    //   })
    // }
    ngOnInit() {
      this.http.get(this.serviceUrl).subscribe((data) => this.datatable2 = data);
    }   
}
