import { Component, Input } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-app2',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './app2.component.html',
  styleUrl: './app2.component.css'
})
export class App2Component {
  @Input() title: string = '';
  @Input() description: string = '';

}
