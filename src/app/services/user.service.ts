import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, Users, Users2 } from '../models/user';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  HttpOptions = {headers: new HttpHeaders ({'Content-Type': 'application/json'})}
  id:number;


  private url= 'https://jsonplaceholder.typicode.com/posts';
  loginUrl = 'http://3.83.115.122:8085/MVCBackEnd/users/login';
  addUrl = 'http://3.83.115.122:8085/MVCBackEnd/users/';

  
  constructor(private http: HttpClient) { }

  private obj = localStorage.getItem("LoggedUser");
  obj2 = JSON.parse(this.obj);

    getUsers2(): Observable <Object[]>{
      return this.http.get<Object[]>(this.addUrl)
    }
  
    getList(): Observable<Object>{
      return this.http.get<Object>(this.addUrl+ this.obj2[0].id)
    }

  getUser(id: number): Observable <User[]> {
    console.log("Getting user"+id);
    return this.http.get<User[]>(this.url+"/"+id);
  }



  addUser(User): Observable<User>{
    console.log("Registering..."+User.email); 
    return this.http.post<User>(this.addUrl, User, this.HttpOptions);
  }


  loginUser(User): Observable<User>{
    console.log("loggin in..."+User.email); 
    console.log(User);
    return this.http.post<User>(this.loginUrl, User, this.HttpOptions);
  }

}