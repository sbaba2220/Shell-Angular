import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfiguratorComponent } from './form-builder/configurator/configurator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfiguratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-form-builder';
}
