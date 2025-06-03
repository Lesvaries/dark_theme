import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';  
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkMode = false;
  constructor(private themeService: ThemeService, private testService: TestService) {}

   ngAfterViewInit(): void {
    // On récupère le thème actuel au chargement
    this.isDarkMode = this.themeService.getTheme() === 'dark';
    
    // On s'assure que la classe .dark est bien appliquée
    const headerElement = document.querySelector('.site-header');
    if (headerElement) {
      headerElement.classList.toggle('dark', this.isDarkMode);
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);

    const headerElement = document.querySelector('.site-header');
    if (headerElement) {
      headerElement.classList.toggle('dark', this.isDarkMode);
  }
  }


  test() {
    this.testService.test();
  }
}