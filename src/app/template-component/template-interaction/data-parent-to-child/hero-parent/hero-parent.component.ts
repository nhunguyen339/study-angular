import { Component, OnInit, Input } from '@angular/core';
import { HEROES, Hero } from '../../../../models/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  public master = 'Master';
  public heroes = HEROES;
  public agree = 0;
  public disagree = 0;
  constructor() { }

  ngOnInit() {
  }

  public onVoted(agree: boolean) {
    agree ? this.agree++ : this.disagree++;
  }

}
