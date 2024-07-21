import { Component } from '@angular/core';
import 'get-icao-checker-wc';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-icao',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<h1>Hello From Angular</h1>

    <button
      class="btn btn-primary"
      id="open-icao-modal"
      name="open-icao-modal"
      type="button"
    >
      Open ICAO Modal
    </button>
    <button
      class="btn btn-success ms-4"
      id="open-icao-modal"
      name="open-icao-modal"
      type="button"
      (click)="handleLogImgBtn()"
    >
      Log img Src
    </button>

    <div class="result-image card mt-4 p-4" style="height: 315px">
      <img id="icao-result-image" src="" alt="" width="200px" />
    </div>

    <get-icao-checker-wc
      isICAOWC="{true}"
      openModalElmId="open-icao-modal"
      savedImageElmId="icao-result-image"
      [getImgSrc]="this.setSavedImgSrc"
    ></get-icao-checker-wc>

    <!-- <get-icao-checker-wc [setSavedImgSrc]="setSavedImgSrc"></get-icao-checker-wc> -->

    <p>after icao wc</p> `,
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
