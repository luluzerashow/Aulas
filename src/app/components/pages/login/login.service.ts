import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginInterface } from './loginInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly GetUserLogin = `${environment.API}Login/GetUserLogin/`;
  private readonly GetUserCookie = `${environment.API}Login/GetUserCookie/`;

  private readonly GetUserJson = `C:\Users\LuluzeraPcWork\Downloads\FrontAngular-master\db.json`;

 
  constructor(private http: HttpClient) { }

  // logaruser(user) : Observable<any>{
  //   return this.http.get(this.GetUserLogin + user);
  // }

  logaruser() : Observable<any>{
    return this.http.get(this.GetUserJson);
  }

  criarcookie(user): Observable<LoginInterface[]>{
    // return this.http.get(this.GetUserCookie + user);
    return this.http.get<LoginInterface[]>(this.GetUserCookie + user)

  }
}
