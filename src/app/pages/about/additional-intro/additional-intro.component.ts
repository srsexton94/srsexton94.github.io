import { Component } from '@angular/core'

@Component({
  selector: 'additional-intro',
  styleUrls: ['./additional-intro.component.scss'],
  template: `
    <div id="more-aboutme" class="additional-intro page-section">
      <community-slides></community-slides>
      <video-container></video-container>
    </div>
  `
})
export class AdditionalIntroComponent {}
