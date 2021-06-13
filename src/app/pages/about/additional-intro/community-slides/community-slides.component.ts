import { Component } from '@angular/core'

@Component({
  selector: 'community-slides',
  styleUrls: ['./community-slides.component.scss'],
  template: `
    <div class="community-intro">
      <h2 class="heading">Community Advocacy</h2>
      <p class="description">
        I&rsquo;m honored to have worked in support of some incredible organizations and causes,
        here are a few near and dear to me.
      </p>
    </div>
    <carousel></carousel>
    <scroll-link linkSrc="#videos">In my free time...</scroll-link>
  `
})
export class CommunitySlidesComponent {}
