import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <under-construction *ngIf="isUnderConstruction"></under-construction>
    <ng-container *ngIf="!isUnderConstruction">
      <navbar></navbar>
      <page-container></page-container>
    </ng-container>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  isUnderConstruction: boolean = true
}
