import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'user-preferred-theme'; // Clé dans localStorage

  private currentTheme: 'light' | 'dark';

  constructor() {
    // On lit ce qu'il y a dans localStorage
    const savedTheme = localStorage.getItem(this.themeKey) as 'light' | 'dark' | null;

    // Mode clair par défaut, sauf si l'utilisateur a déjà choisi un thème
    this.currentTheme = savedTheme || 'light';

    this.applyTheme(this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem(this.themeKey, this.currentTheme); // Sauvegarde dans localStorage
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
