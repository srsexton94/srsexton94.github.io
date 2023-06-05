import { Component } from '@angular/core';

@Component({
  selector: 'community-page',
  styleUrls: ['./community.component.scss'],
  template: `
    <section id="community-section" class="page-section">
      <div class="community-intro">
        <h2 class="heading">Community Advocacy</h2>
        <p class="description">
          I&rsquo;m honored to have worked in support of some incredible organizations and causes.
          Here are a few near and dear to me:
        </p>
      </div>
      <carousel></carousel>
    </section>
  `,
})
export class CommunityComponent {}
