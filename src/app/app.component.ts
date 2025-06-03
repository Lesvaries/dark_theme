import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, HeroSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
  title = 'dark-theme';

  ngOnInit() {
    console.log('Thème initial :', this.themeService.getTheme());
  }

}
