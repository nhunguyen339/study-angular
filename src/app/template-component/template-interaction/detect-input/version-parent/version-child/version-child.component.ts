import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h2>Version {{major}}.{{minor}}:</h2>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `,
  styles: []
})
export class VersionChildComponent implements OnChanges {
  @Input() minor;
  @Input() major;

  public changeLog: string[] = [];

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const log: string[] = [];
    for (let propName in changes) {
      const propChange = changes[propName];
      console.log(changes, propName);
      const to = JSON.stringify(propChange.currentValue);
      if (propChange.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(propChange.previousValue);
        log.push(`${propName} change from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
