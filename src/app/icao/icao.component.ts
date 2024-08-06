import { Component } from '@angular/core';
import 'get-icao-checker-wc';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'get-icao-checker-wc/get-icao-checker-wc.js';

@Component({
  selector: 'app-icao',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './icao.component.html',
  styleUrl: './icao.component.css',
})
export class IcaoComponent {
  savedImgSrc = '';
  setSavedImgSrc = (src: string) => {
    console.log('Hello from angualr ICAO component');
    console.log(this);
    console.log(this.savedImgSrc);
    this.savedImgSrc = src;
  };

  handleLogImgBtn = () => {
    console.log(this.savedImgSrc);
  };
}
