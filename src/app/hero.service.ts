import { Injectable } from '@angular/core';
import { Hero } from 'src/interfaces/hero';
import { HEROES } from 'src/data/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
