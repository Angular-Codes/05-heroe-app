import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
  ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById( heroeId: string ): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${heroeId}`)
  }

}
