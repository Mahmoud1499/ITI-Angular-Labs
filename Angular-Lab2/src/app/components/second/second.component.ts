import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  imagesArr: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
  ]
  imageSource: string = this.imagesArr[0];
  i: number = 0;
  interval: any = '';
  next(): void {
    if (this.i < this.imagesArr.length - 1) {
      this.i++;
    }
    this.imageSource = this.imagesArr[this.i];
  }
  previous(): void {
    if (this.i > 0) {
      this.i--;
    }
    this.imageSource = this.imagesArr[this.i];
  }
  start(): void {
    this.interval = setInterval(() => {
      this.next();
      if (this.i == this.imagesArr.length - 1) {
        this.i = -1;
      }
    }, 1500);
  }
  stop(): void {
    clearInterval(this.interval);
  }
}

