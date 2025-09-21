import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-buttons',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social-buttons.component.html',
})
export class SocialButtonsComponent {
  links = signal([
    {
      icon: faPhone,
      url: 'tel:+541165865633',
      label: 'Phone',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/lucas-cirillo-berardi-0a966630b/',
      label: 'LinkedIn',
    },
    {
      icon: faInstagram,
      url: 'https://instagram.com/lucascirilloberardi',
      label: 'Instagram',
    },
  ]);
}
