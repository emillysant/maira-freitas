import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navibar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss'
})
export class NavibarComponent {

  constructor(private router: Router) {}
  navigateToAdmin() {
    console.log('navigateToAdmin')
    this.router.navigate(['/fanadmin']);
  }
}
