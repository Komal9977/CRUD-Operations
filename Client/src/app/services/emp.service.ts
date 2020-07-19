import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private serviceUrl = 'http://localhost:5000/api/v1/employees';
  users: any;
  constructor(private http:HttpClient) { }

ngOnInit() {
  this.http.get(this.serviceUrl).subscribe((data) => this.users = data);
}
  
}
