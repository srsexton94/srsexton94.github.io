import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <navbar></navbar>
    <home-page></home-page>
    <about-page></about-page>
    <experience-page></experience-page>
    <engineering-page></engineering-page>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
