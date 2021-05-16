import { Component } from '@angular/core';

@Component({
  selector: 'page-container',
  styleUrls: ['./page-container.component.scss'],
  template: `
    <ng-container>
      <home-page></home-page>
      <engineering-page></engineering-page>
      <design-page></design-page>
      <about-page></about-page>
    </ng-container>
  `
})
export class PageContainerComponent {}
