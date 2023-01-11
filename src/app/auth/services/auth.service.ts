import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl

  private user: Auth | undefined

  get userData () {
    return { ...this.user };
  }

  constructor(
    private http: HttpClient
  ){}

  validateAuth():Observable<boolean>{
    const userId = localStorage.getItem('id')
    if( !userId ) return of(false)

    return this.http
                .get<Auth>(`${this.baseUrl}/usuarios/${userId}`)
                .pipe(
                  map( auth => {
                    this.user = auth;
                    return true
                  })
                );
  }


  login(): Observable<Auth>{
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
  }

  setUser(user: Auth) {
    this.user = user;
  }

  logout() {
    this.user = undefined;
    localStorage.clear()
  }

}
