import { Component } from '@angular/core';

@Component({
  selector: 'page-container',
  template: `
    <ng-container>
      <home-page></home-page>
      <about-page></about-page>
    </ng-container>
  `
})
export class PageContainerComponent {}
