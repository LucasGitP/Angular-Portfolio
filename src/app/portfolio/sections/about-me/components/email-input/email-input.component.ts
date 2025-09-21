import { Component, signal } from '@angular/core';

@Component({
  selector: 'email-input',
  templateUrl: './email-input.component.html',
})
export class EmailInputComponent {
  value = 'lucascirilloberardi@gmail.com';
  copied = signal(false);

  copyToClipboard() {
    try {
      navigator.clipboard.writeText(this.value);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
}
