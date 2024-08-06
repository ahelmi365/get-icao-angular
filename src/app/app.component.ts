import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IcaoComponent } from './icao/icao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IcaoComponent],
  template: ` <main class="container mt-4">
    <app-icao />
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'get-icao-angular';
}
