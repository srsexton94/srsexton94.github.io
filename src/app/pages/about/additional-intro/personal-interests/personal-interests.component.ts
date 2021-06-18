import { Component } from '@angular/core'
import { ImagePaths, InterestsList, SocialLinkTypes } from '../../../../../models'

@Component({
  selector: 'personal-interests',
  styleUrls: ['./personal-interests.component.scss'],
  template: `
    <div id="videos" class="personal-interests page-section">
      <h3 class="intro-header">In my free time...</h3>
      <div class="btn-container">
        <button class="expand-btn large" (click)="chooseMedia('DANCE')">I dance 🕺</button>
        <button class="expand-btn large" (click)="chooseMedia('BJJ')">I fight 🥊</button>
        <button class="expand-btn large" (click)="chooseMedia('WRITE')">I write 📝</button>
        <button class="expand-btn large" (click)="chooseMedia('LANG')">I... talk? 🙊</button>
      </div>
      <div class="display-container">
        <video-player *ngIf="isMediaShown.BJJ" type="BJJ" (close)="clearMedia()"></video-player>
        <video-player *ngIf="isMediaShown.DANCE" type="DANCE" (close)="clearMedia()"></video-player>
        <video-player *ngIf="isMediaShown.LANG" type="LANG" (close)="clearMedia()"></video-player>
        <social-link *ngIf="isMediaShown.WRITE" [excludeIcon]="true" [linkType]="nanoSitePath">
          <div class="link-content-container">
            <img class="nano" alt="{{ nanoAlt }}" [src]="nanoImgPath">
            <div class="caption">
              <p>Here I will write things about writing</p>
            </div>
          </div>
        </social-link>
      </div>
    </div>
  `
})
export class PersonalInterestsComponent {
  interestsList: string[] = InterestsList
  isMediaShown: { [key: string]: boolean } = { BJJ: false, DANCE: false, LANG: false, WRITE: false }
  nanoAlt: string = 'National Novel Writing Month certificate of completion'
  nanoImgPath: string = ImagePaths.nanowrimoImg
  nanoSitePath: SocialLinkTypes = SocialLinkTypes.NANO

  chooseMedia(videoType: string): void {
    const wasAlreadyShown: boolean = this.isMediaShown[videoType]

    this.clearMedia()
    if (!wasAlreadyShown) this.isMediaShown[videoType] = true
  }

  clearMedia(): void {
    Object.keys(this.isMediaShown).forEach(key => this.isMediaShown[key] = false)
  }
}
