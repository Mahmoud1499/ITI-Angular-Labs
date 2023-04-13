import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  userInput = '';

  resetInput() {
    this.userInput = "";
  }
  getValue(event: any) {
    this.userInput = event.target.value;
  }
}
