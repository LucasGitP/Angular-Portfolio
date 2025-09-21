import { Component } from '@angular/core';
import AboutMeComponent from './sections/about-me/about-me.component';
import ContactComponent from './sections/contact/contact.component';
import SkillsComponent from './sections/skills/skills.component';

@Component({
  selector: 'portfolio',
  imports: [AboutMeComponent, SkillsComponent, ContactComponent],
  templateUrl: './portfolio.component.html',
})
export default class PortfolioComponent {}
