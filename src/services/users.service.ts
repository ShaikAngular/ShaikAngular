import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  getUsers(){
    return this.httpClient.get<Users>(`../assets/a.json`)
    // return this.httpClient.get<Users>(`../assets/users/users.json`)
   }

   postUsers(req:any):any{
     console.log("service request",req);
    // this.httpClient.post<User>(`../assets/a.json`,req)
    this.httpClient.post<any>(`http://localhost:3000/users`,req)
    .subscribe(
      
      res => console.log("Data Post Done")
      )
   }
}

export interface Users {
  users: User[];
}

export interface User {
  userId:       number;
  firstName:    string;
  lastName:     string;
  phoneNumber:  string;
  emailAddress: string;
}
