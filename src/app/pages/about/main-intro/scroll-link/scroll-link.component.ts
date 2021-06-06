import { Component } from '@angular/core';

@Component({
  selector: 'scroll-link',
  styleUrls: ['./scroll-link.component.scss'],
  template: `
    <a class="scroll-link" href="#more-aboutme">
      Learn more about me!
      <div class="arrows"></div>
    </a>
  `
})
export class ScrollLinkComponent {}
