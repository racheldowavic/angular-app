import { Injectable } from '@angular/core';

@Injectable()
export class ColourService {
  colours: String[] = ['#c2185b', '#d50000', '#ff1744', '#ad1457', '#880e4f'];
  index: number = 0;

  constructor() {}

  getNextColour() {
    this.index = (this.index + 1) % this.colours.length;
    return this.colours[this.index];
  }
}
