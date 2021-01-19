import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiServer = "https://jsonplaceholder.typicode.com/users";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json'
    })
  }


  constructor(public http : HttpClient) { }

  getAll(){
    return this.http.get(this.apiServer)
  }

  getData(index:any){
    return this.http.get(`${this.apiServer}/${index}`)
  }
}
