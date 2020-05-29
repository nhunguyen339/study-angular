import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../../../models/hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input() master: string;
  @Output() voted = new EventEmitter();

  public didVoted = false;

  constructor() { }

  ngOnInit() {
  }

  public onVote(optionVal) {
    this.voted.emit(optionVal);
    this.didVoted = true;
  }
}
