import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*英雄列表*/
  heroes: Hero[];
  /*已选择的英雄对象*/
  selectedHero: Hero;

  /*定义注入的服务*/
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  /*选择英雄*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /*获取英雄列表*/
  getHeroes(): void {
    /*从服务中获取英雄列表*/
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
