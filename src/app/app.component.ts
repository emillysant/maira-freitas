import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import "tailwindcss/tailwind.css"
import { NavibarComponent } from './components/navibar/navibar.component';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavibarComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maira_freitas';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

}