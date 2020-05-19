import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custume-pipe',
  templateUrl: './custume-pipe.component.html',
  styleUrls: ['./custume-pipe.component.css']
})
export class CustumePipeComponent implements OnInit {
  public power = 5;
  public boost = 2;
  public heroes = [];
  public canFly = false;
  public mutateArr = false;

  constructor() { }

  ngOnInit() {
  }

  public addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    if (this.mutateArr) {
      this.heroes = [ ...this.heroes, hero ];
      console.log(this.heroes);
    } else {
      this.heroes.push(hero);
    }
  }

  public reset() {
    this.heroes = [];
  }

}
