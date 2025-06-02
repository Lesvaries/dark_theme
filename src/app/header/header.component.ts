import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.addNavFocusEffects();
    this.addActionButtonListeners();
  }

  private addNavFocusEffects(): void {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      // On cast 'link' en HTMLElement
      const htmlLink = link as HTMLElement;

      htmlLink.addEventListener('focus', () => {
        htmlLink.style.outline = '2px dashed rgba(31, 110, 235, 0.6)';
        htmlLink.style.outlineOffset = '-2px';
      });

      htmlLink.addEventListener('blur', () => {
        htmlLink.style.outline = 'none';
      });
    });
  }

  private addActionButtonListeners(): void {
    const actionButtons = document.querySelectorAll('.action-btn');

    actionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const label = btn.getAttribute('aria-label');
        console.log(`Bouton cliqué : ${label}`);
      });
    });
  }
}