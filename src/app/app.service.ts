import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
   
   constructor(private http: HttpClient){}
   
   callAPI(){
       return this.http.get(`./assets/test.json`)
   }
}