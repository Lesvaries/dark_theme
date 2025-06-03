import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Vérifie si l'utilisateur préfère le dark mode par défaut
  private isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  private currentTheme: 'light' | 'dark' = this.isSystemDark ? 'dark' : 'light';

  constructor() {
    this.applyTheme(this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const appRoot = document.querySelector('app-root') || document.body;

    if (theme === 'dark') {
      appRoot.classList.add('dark-theme');
    } else {
      appRoot.classList.remove('dark-theme');
    }
  }
}
