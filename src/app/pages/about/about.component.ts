import { Component } from '@angular/core';
import { MediaPaths, SocialLinkTypes } from '../../../../src/models/index'

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
        <social-link [linkType]="linkType" [excludeIcon]="true">
          <img class="resume-preview" [src]="resumeSrc"/>
        </social-link>
        <img class="pronoun-badge" [src]="pronounSrc"/>
        <button (click)="toggleModal('BJJ')">Open BJJ modal</button>
        <button (click)="toggleModal('DANCE')">Open Dance modal</button>
      </div>
    </section>
    <modal *ngIf="isModalOpen.BJJ" modalName="BJJ" (close)="toggleModal('BJJ')"></modal>
    <modal *ngIf="isModalOpen.DANCE" modalName="DANCE" (close)="toggleModal('DANCE')"></modal>
  `
})
export class AboutComponent {
  linkType: SocialLinkTypes = SocialLinkTypes.RESUME
  selfieSrc: string = MediaPaths.aboutMeImg
  pronounSrc: string = MediaPaths.pronounBadge
  resumeSrc: string = MediaPaths.resumeImg

  isModalOpen: { [key: string]: boolean } = {
    BJJ: false,
    DANCE: false
  }

  toggleModal(modalSelector: string): void {
    this.isModalOpen[modalSelector] = !this.isModalOpen[modalSelector]
  }
}
