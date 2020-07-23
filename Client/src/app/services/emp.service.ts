import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private serviceUrl = 'http://localhost:5000/api/v1/employees';
  users: any;
  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
     $key: new FormControl(null),
     firstName: new FormControl(''),
     lastName: new FormControl(''),
     email: new FormControl('')
  });

ngOnInit() {
  this.http.get(this.serviceUrl).subscribe((data) => this.users = data);
}
  // umethod(id){
  //   return this.http.put(id, first_name, last_name, email, this.serviceUrl).subscribe((data) =>
  //  this.users = data);
  // }
  // dmethod(id){
  //   return this.http.delete(this.serviceUrl).subscribe((data) => this.users = data);
  // }
  // cmethod(){
  //   return this.http.post(id, first_name, last_name, email, this.serviceUrl).subscribe((data) =>
  // //  this.users = data);
  // }
}
