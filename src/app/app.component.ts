import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { App2Component } from "./app2/app2.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, App2Component, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-my-project';
}
