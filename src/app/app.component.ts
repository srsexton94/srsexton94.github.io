import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <navbar></navbar>
    <page-container></page-container>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
