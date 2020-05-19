import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  title = 'study-angular';
  public message = '';

  boxes = [''];

  onUpdate(value) {
    if (value) {
      this.boxes.push(value);
      this.message = '';
    } else {
      this.message = 'Please input your value';
    }
  }

}
