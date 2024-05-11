import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component'; 

@Component({
  selector: 'pizzeria-web',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'San-Cayetano-Web';
}
