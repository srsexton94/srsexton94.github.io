import { Component } from '@angular/core';

@Component({
  selector: 'page-container',
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
