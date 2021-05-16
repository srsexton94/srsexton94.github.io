import { Component } from '@angular/core';
import { MediaPaths } from '../../../../src/models/paths'

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-section" class="page-section">
      <img class="selfie" [src]="selfieSrc"/>
      <div class="self-description">
        <h2>Hi there! I'm Sam</h2>
        <p>
          Here's a paragraph where I'll tell you about myself and all the cool stuff that I do weeeeee
        </p>
        <img class="pronoun-badge" [src]="pronounSrc"/>
        <button (click)="toggleModal('BJJ')">Open BJJ modal</button>
        <button (click)="toggleModal('DANCE')">Open Dance modal</button>
        <modal *ngIf="isModalOpen.BJJ" modalName="BJJ" (close)="toggleModal('BJJ')"></modal>
        <modal *ngIf="isModalOpen.DANCE" modalName="Dance" (close)="toggleModal('DANCE')"></modal>
      </div>
    </section>
  `
})
export class AboutComponent {
  selfieSrc: string = MediaPaths.aboutMeImg
  pronounSrc: string = MediaPaths.pronounBadge
  isModalOpen: { [key: string]: boolean } = {
    BJJ: false,
    DANCE: false
  }

  toggleModal(modalSelector: string): void {
    this.isModalOpen[modalSelector] = !this.isModalOpen[modalSelector]
  }
}
