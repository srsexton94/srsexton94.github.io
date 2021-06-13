import { Component } from '@angular/core'

@Component({
  selector: 'additional-intro',
  styleUrls: ['./additional-intro.component.scss'],
  template: `
    <div id="more-aboutme" class="additional-intro page-section">
      <community-slides></community-slides>
      <personal-interests></personal-interests>
    </div>
  `
})
export class AdditionalIntroComponent {}
