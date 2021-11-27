import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

tableData :any ;
a="hai";
  constructor(private service: UsersService) { 
      
  }

  ngOnInit(): void {
    this.service.userDataSubject.subscribe(res=>{
      console.log("res",res);
      //alert("res"+res)
      if(res){
        // this.tableData.push(res);
        this.tableData = res;
        console.log("table data",this.tableData)
      }
      alert("table data"+this.tableData)
    })
  }

}
