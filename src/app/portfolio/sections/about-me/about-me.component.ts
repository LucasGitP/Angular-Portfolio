import { Component } from '@angular/core';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';

@Component({
  selector: 'about-me',
  imports: [EmailInputComponent, SocialButtonsComponent],
  templateUrl: './about-me.component.html',
})
export default class AboutMeComponent {}
