import { Injectable } from '@angular/core';
import { UserP, playlist} from '../models/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  private updateUrl = 'http://3.83.115.122:8085/MVCBackEnd/users/'


  constructor(private http: HttpClient) { }

  getUser(id:number): Observable<UserP>{
    return this.http.get<UserP>(this.updateUrl+id);
  }

  updateUser(id:number, playlist:Object): Observable<playlist>{
    return this.http.put<playlist>(this.updateUrl+id, playlist);
  }

  getPlay(): Observable <Object[]>{
    return this.http.get<Object[]>(this.updateUrl+'50')
  }

  
}
