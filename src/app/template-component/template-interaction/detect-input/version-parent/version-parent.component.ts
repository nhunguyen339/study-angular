import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {
  public minor = 23;
  public major = 0;

  constructor() { }

  ngOnInit() {
  }

  public newMinor() {
    this.minor++;
  }

  public newMajor() {
    this.major++;
    this.minor = 0;
  }
}
