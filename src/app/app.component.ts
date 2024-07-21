import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IcaoComponent } from './icao/icao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IcaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'get-icao-angular';
}
