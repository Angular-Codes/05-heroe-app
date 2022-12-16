import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http: HttpClient,
  ) { }

  getHeroes(): Observable<Object> {
    return this.http.get('http://localhost:3000/heroes');
  }

}
