import { Component, HostListener } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisH, faLaptopHouse, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  styleUrls: ['./navbar.component.scss'],
  template: `
    <nav class="navbar" [ngClass]="{ 'menu-open': isMenuOpen }">
      <a class="home-link" href="#" >
        {{ homeLinkText }}
      </a>
      <ul class="menu-list" [ngClass]="{ 'collapsed': !isMenuOpen }">
        <li class="menu-item">
          <a class="menu-link" href="#engineering-section" (click)="handleMenuClick()">
            Engineering
          </a>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#design-section" (click)="handleMenuClick()">
            Design
          </a>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#about-section" (click)="handleMenuClick()">
            About me
          </a>
        </li>
      </ul>
      <button class="menu-btn" (click)="handleMenuClick(true)">
        <fa-icon class="icon menu" [icon]="menuIcon"></fa-icon>
      </button>
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen: boolean = false
  homeIcon: IconProp = faLaptopHouse
  scrolled: number = 0

  get menuIcon(): IconProp {
    return this.isMenuOpen ? faTimes : faEllipsisH
  }

  get homeLinkText(): string {
    return this.scrolled > 500 ? 'Samantha Rose Sexton' : 'SRS'
  }

  handleMenuClick(isButton?: boolean): void {
    this.isMenuOpen = isButton ? !this.isMenuOpen : false
  }

  @HostListener('window:scroll', ['$event']) onScroll(): void {
    this.scrolled = window.scrollY
  }
}
