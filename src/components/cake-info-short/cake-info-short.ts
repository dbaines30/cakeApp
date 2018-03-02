import { Component } from '@angular/core';

@Component({
  selector: 'cake-info-short',
  templateUrl: 'cake-info-short.html'
})
export class CakeInfoShortComponent {

  text: string;

  constructor() {
    console.log('Hello CakeInfoShortComponent Component');
    this.text = 'Hello World';
  }

}
