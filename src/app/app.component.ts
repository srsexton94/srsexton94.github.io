import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <under-construction *ngIf="isUnderConstruction"></under-construction>
    <main-content *ngIf="!isUnderConstruction"></main-content>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  isUnderConstruction: boolean = false //true
}
