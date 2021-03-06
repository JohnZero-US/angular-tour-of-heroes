import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /*带有装饰器的属性*/
  @Input() hero: Hero;

  constructor() {
  }

  ngOnInit() {
  }

}
