import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
