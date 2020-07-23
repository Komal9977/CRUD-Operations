import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private empservice: EmpService){}

  ngOnInit(): void {}

// submitForm() {
//   this.empservice.cmethod(this.createform.value).subscribe(res => {
//     console.log("employee created successfully!")
//     this.router.navigateByUrl('/maintool')
//   })
// }
}


