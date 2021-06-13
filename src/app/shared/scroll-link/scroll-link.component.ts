import { Component, Input } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'scroll-link',
  styleUrls: ['./scroll-link.component.scss'],
  template: `
    <div class="scroll-link-container">
      <a class="scroll-link" [href]="linkSrc">
        <ng-content></ng-content>
        <div class="arrows" [ngClass]="{ 'animated': shouldAnimateArrows }"></div>
      </a>
      <fa-icon 
        class="pause-icon"
        tabindex="0"
        [attr.aria-label]="animationControlAriaLabel"
        [icon]="animationControlIcon"
        (click)="onPause()"
      ></fa-icon>
    </div>
  `
})
export class ScrollLinkComponent {
  @Input() linkSrc: string = '#'
  
  shouldAnimateArrows: boolean = true

  get animationControlIcon(): IconProp {
    return this.shouldAnimateArrows ? faPauseCircle : faPlayCircle
  }

  get animationControlAriaLabel(): string {
    return `${ this.shouldAnimateArrows ? 'Pause': 'Play'} scroll animation`
  }

  onPause(): void {
    this.shouldAnimateArrows = !this.shouldAnimateArrows
  }
}
