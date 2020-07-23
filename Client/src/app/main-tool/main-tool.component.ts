import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-main-tool',
  templateUrl: './main-tool.component.html',
  styleUrls: ['./main-tool.component.scss']
})
export class MainToolComponent implements OnInit {
  private serviceUrl = 'http://localhost:5000/api/v1/employees';
  users : any;
  employee : any;
  constructor(private http:HttpClient,private empservice: EmpService) { }

  title = 'crudoperation';
  

  ngOnInit()
   { 
    this.http.get(this.serviceUrl).subscribe((data) => this.users = data);
  }   


update(id) {
  // this.empservice.umethod().subscribe((data =>{ console.log(id) }),
  console.log(id); }


delete(id) {
//   this.empservice.dmethod().subscribe((data) => {console.log(id) }),
  console.log(id);

 }

}
