import { Component } from '@angular/core'
import { ImagePaths, InterestsList, SocialLinkTypes } from '../../../../../models'

@Component({
  selector: 'personal-interests',
  styleUrls: ['./personal-interests.component.scss'],
  template: `
    <div id="videos" class="personal-interests page-section">
      <h3 class="intro-header">In my free time...</h3>
      <div class="btn-container">
        <button class="expand-btn large" (click)="chooseMedia('DANCE')">
          I dance <span aria-hidden="true">🕺</span>
        </button>
        <button class="expand-btn large" (click)="chooseMedia('BJJ')">
          I fight <span aria-hidden="true">🥊</span>
        </button>
        <button class="expand-btn large" (click)="chooseMedia('WRITE')">
          I write <span aria-hidden="true">📝</span>
        </button>
      </div>
      <div class="display-container">
        <video-player *ngIf="isMediaShown.BJJ" type="BJJ"></video-player>
        <video-player *ngIf="isMediaShown.DANCE" type="DANCE"></video-player>
        <nano-image-link *ngIf="isMediaShown.WRITE"></nano-image-link>
      </div>
    </div>
  `
})
export class PersonalInterestsComponent {
  interestsList: string[] = InterestsList
  isMediaShown: { [key: string]: boolean } = { BJJ: false, DANCE: false, LANG: false, WRITE: false }

  chooseMedia(videoType: string): void {
    const wasAlreadyShown: boolean = this.isMediaShown[videoType]

    this.clearMedia()
    if (!wasAlreadyShown) this.isMediaShown[videoType] = true
  }

  clearMedia(): void {
    Object.keys(this.isMediaShown).forEach(key => this.isMediaShown[key] = false)
  }
}

// TODO: add in 4th button/video for language learning interest
// <button class="expand-btn large" (click)="chooseMedia('LANG')">I... talk? <span aria-hidden="true">🙊</span></button>
// <video-player *ngIf="isMediaShown.LANG" type="LANG" (close)="clearMedia()"></video-player>