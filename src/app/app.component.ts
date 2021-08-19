import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <under-construction *ngIf="isUnderConstruction; else mainContent"></under-construction>
    <ng-template #mainContent>
      <main-content></main-content>
    </ng-template>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  isUnderConstruction: boolean = false
}
