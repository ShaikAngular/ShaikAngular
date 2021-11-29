import { Component, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, flatMap, map, mergeMap, switchMap  } from 'rxjs/operators';
import { 
	ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder} from '@angular/forms';
import { concat, forkJoin, from, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 
  testForm : FormGroup = new FormGroup({});
  userData: any;
  id: any;
  createRow = [];
   //checked = false;
  constructor(private service:UsersService,private fb: FormBuilder,private router:Router){
    // this.testForm = new FormGroup({})
    this.testForm = this.fb.group({
      userId: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(6)]],
      firstName: ['',[Validators.required, Validators.maxLength(10)]],
      lastName: ['',[Validators.required, Validators.maxLength(10)]],
      phoneNumber: ['',[Validators.required, Validators.maxLength(10)]],
      mailId: ['',[Validators.required, Validators.email]],
    })
  }
  ngOnInit() {
    this.apiCall();
    this.apiCall1();
  }

   clickCheckbox(d,e){
     console.log("e",e.target.checked)
     const status = e.target.checked
    if(status ==true){
      console.log("data",d);
      // this.createRow = d;
      this.createRow.push(d)
    }
    if(status == false){
      console.log("before pop",this.createRow);
      this.createRow.pop()
      console.log("after pop",this.createRow);
    }
  }

   validateScreen(){
    if(this.createRow){
      this.service.passValue(this.createRow);
    } else {
      alert("select atleast one row")
    }
    this.router.navigateByUrl('/ValidateComponent')
  }

   
  apiCall()
  {
  this.service.getUsers().
      subscribe(item=>
      {
        this.userData = item;
        this.ls();
        // this.userData = item.users;
        console.log("item",item)
      })
   console.log("user data",this.userData)
    }

  apiCall1(){
    // this.service.getUsers().forEach(item=>
    //   {
    //     console.log("A+",item)
    //   }
    //   )
    // }
    this.service.getUsers().pipe(
      map(
        val=>{
          this.id=val;
          console.log("val",val);
          
        }
      ))
    //  .subscribe(res=>this.id=res)
  }

  update(e:any,rowData:any){
    console.log("e",e,"data",rowData)
    alert("Row id:"+rowData.userId +"   "+"First Name:"+rowData.firstName)
  }

  postData(){
    console.log("post")
    const req ={
      userId : this.testForm.get('userId')?.value,
      firstName: this.testForm.get('firstName')?.value,
      laststName: this.testForm.get('lastName')?.value,
      phoneNumber: this.testForm.get('phoneNumber')?.value,
      emailAddress: this.testForm.get('mailId')?.value
    }
    console.log("post req",req)
    //alert("user id:" + req.userId + " " + "First Name:" + req.firstName)
  //  this.service.postUsers(req);
    //this.testForm.reset();
    this.userData.push(req);
    this.ls();
  }
  
  // mergemap
  // mm(){
     
  //   const series1$ = of('a', 'b');
  //   const series2$ = of('x', 'y');
  //   const result$ = concat(series1$, series2$);
  //   // console.log("concat", result$.subscribe())
  //   result$.subscribe(console.log);
  //   console.log(result$.subscribe)
  // }

  // example for mergemap, concatmap, switchmap, exhaustmap
  public example(operator) {
    from([0, 1, 2, 3, 4, 5])
      .pipe(operator(x => of(x).pipe(delay(500))))
      .subscribe(
        console.log,
        () => {},
        () => console.log(`${operator.name} completed`)
      );
  }
// FlatMap / mergeMap - Instantly generates an Observable for any source item, all previous Observables are preserved
  public mm() {
    this.example(mergeMap); // Output: 0 - 4 fast
  }
  public fm() {
    this.example(flatMap); // Output: 0 - 4 fast
  }
// concatMap - Wait for the previous Observable to complete before creating the next one
  public cm() {
    this.example(concatMap); // Output: 0 - 4 slow
  }
// switchMap - Discard previous observation and get last observation
  public sm() {
    this.example(switchMap); // Output: 4
  }
// exhaustMap -- Opposite to switchmap, 
  public em() {
    this.example(exhaustMap); // Output: 0
  }

// of operator
of(){
  //emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5,[8,9],88,"hello");
const subscribe = source.subscribe(val => console.log(val));
}

//from operator
from(){
//emit array as a sequence of values
const arraySource = from("hello");
const subscribe = arraySource.subscribe(val => console.log(val));
}

//forkjoin
fj(){
  const src1 = [1,2,3]
  const src2 = [7,8,9]
  const src3 = ['a','b','c']
  const res1 = []
  res1.push(src1);
  res1.push(src2);
  res1.push(src3);
  // const res = forkJoin([src1,src2,src3]).subscribe()
  console.log("fk result", res1)
  forkJoin(res1).subscribe(res=>console.log("fork join result", res))
}

// local storage (insert data in local storage)
ls(){
  localStorage.setItem('shaik',JSON.stringify(this.userData))
  console.log(JSON.parse(localStorage.getItem('shaik')))
}





}

export interface users {
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
}