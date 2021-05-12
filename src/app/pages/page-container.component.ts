import { Component } from '@angular/core';

@Component({
  selector: 'page-container',
  styleUrls: ['./page-container.component.scss'],
  template: `
    <home-page></home-page>
    <engineering-page></engineering-page>
    <design-page></design-page>
    <about-page></about-page>
  `
})
export class PageContainerComponent {}
