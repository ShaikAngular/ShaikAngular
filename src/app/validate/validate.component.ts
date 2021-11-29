import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit,OnDestroy {

tableData :any;
a="hai";
  constructor(private service: UsersService) { 
      
  }

  ngOnInit(): void {
    this.tableData = this.service.userDataSubject.value
   }

   validatData(){
     console.log("post data for validation",this.tableData)
   }
  ngOnDestroy(){
    this.service.userDataSubject.next({})
  }

}
