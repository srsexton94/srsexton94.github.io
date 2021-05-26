import { Component, HostListener } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faLaptopHouse, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  styleUrls: ['./navbar.component.scss'],
  template: `
    <nav class="navbar" [ngClass]="{ 'menu-open': isMenuOpen, 'past-breakpoint': isPastBreakpoint }">
      <div class="nav-header">
        <a class="home-link" href="#" >
          {{ homeLinkText }}
        </a>
        <button class="menu-btn" (click)="handleMenuClick(true)">
          <fa-icon class="icon menu" [icon]="menuIcon"></fa-icon>
        </button>
      </div>
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
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen: boolean = false
  homeIcon: IconProp = faLaptopHouse
  isPastBreakpoint: boolean = false

  get menuIcon(): IconProp {
    return this.isMenuOpen ? faTimes : faBars
  }

  get homeLinkText(): string {
    return this.isPastBreakpoint ? 'Samantha Rose Sexton' : 'SRS'
  }

  handleMenuClick(isButton?: boolean): void {
    this.isMenuOpen = isButton ? !this.isMenuOpen : false
  }

  @HostListener('window:scroll', ['$event']) onScroll(): void {
    this.isPastBreakpoint = window.scrollY > 550
  }
}
