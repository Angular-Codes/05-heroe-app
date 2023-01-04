import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById( heroeId: string ): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${heroeId}`)
  }

  getSuggestions( term: string ): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${term}&_limit=6`);
  }

}
