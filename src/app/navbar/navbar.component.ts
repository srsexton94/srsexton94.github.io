import { Component, HostListener } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars, faLaptopHouse, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  styleUrls: ['./navbar.component.scss'],
  template: `
    <nav class="navbar" [ngClass]="{ 'menu-open': isMenuOpen, 'past-breakpoint': isPastBreakpoint }">
      <div class="nav-header">
        <a class="home-link" aria-label="Home" href="#" >
          {{ homeLinkText }}
        </a>
        <button class="menu-btn" [attr.aria-label]="menuToggle.label" (click)="handleMenuClick(true)">
          <fa-icon class="icon menu" aria-hidden="true" [icon]="menuToggle.icon"></fa-icon>
        </button>
      </div>
      <ul class="menu-list" [ngClass]="{ 'collapsed': !isMenuOpen }">
        <li *ngFor="let menuTab of menuTabs" class="menu-item">
          <a class="menu-link" [attr.href]="getLinkId(menuTab)" (click)="handleMenuClick()">
            {{ menuTab }}
          </a>
        </li>
      </ul>
    </nav>
  `
})
export class NavbarComponent {
  homeIcon: IconProp = faLaptopHouse
  isMenuOpen: boolean = false
  isPastBreakpoint: boolean = false
  menuTabs: string[] = ['About me', 'Experience', 'Community']

  get menuToggle(): { icon: IconProp, label: string } {
    return this.isMenuOpen 
      ? { icon: faTimes, label: 'Close menu' } 
      : { icon: faBars, label: 'Open menu' }
  }

  get homeLinkText(): string {
    return this.isPastBreakpoint ? 'Sam Rose Sexton' : 'SRS'
  }

  getLinkId(tabText: string): string {
    return `#${tabText.toLowerCase().split(' ').join('-')}-section`
  }

  handleMenuClick(isButton?: boolean): void {
    this.isMenuOpen = isButton ? !this.isMenuOpen : false
  }

  @HostListener('window:scroll', ['$event']) onScroll(): void {
    this.isPastBreakpoint = window.scrollY > 450
  }
}
