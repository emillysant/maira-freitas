import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fan-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fan-admin.component.html',
  styleUrl: './fan-admin.component.scss'
})
export class FanAdminComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
    } else {
      alert('Por favor, preencha o nome de usuário e a senha.');
    }
  }
}
