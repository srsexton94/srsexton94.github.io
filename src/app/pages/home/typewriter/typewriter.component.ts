import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'typewriter',
  styleUrls: ['./typewriter.component.scss'],
  template: `
    <ng-container>
      <p 
        *ngIf="!isPaused"
        class="typewriter-text"
        [attr.aria-label]="currentTypewriterText"
      >
        {{ displayText }}
      </p>
      <p *ngIf="isPaused" class="typewriter-text composite">
        {{ compositeDisplayText }}
      </p>
      <button class="toggle-btn" (click)="toggleAnimationPause()">
        {{ animationToggleText }}
      </button>
    </ng-container>
  `
})
export class TypewriterComponent implements OnInit {
  @Input() typewriterTexts: string[] = ['hello world!']
  @Input() typingSpeed: number = 50

  displayText: string = ''
  isBackspacing: boolean = false
  isPaused: boolean = false
  textIndex: number = 0
  typingIndex: number = 0

  get animationToggleText(): string {
    return `${ this.isPaused ? 'Resume' : 'Pause'} typing`
  }

  get compositeDisplayText(): string {
    return this.typewriterTexts.join(' | ')
  }

  get currentTypewriterText(): string {
    return this.typewriterTexts[this.textIndex]
  }

  ngOnInit(): void {
    this.typewriter()
  }

  toggleAnimationPause(): void {
    this.isPaused = !this.isPaused
  }

  private typewriter(): void {
    !this.isBackspacing ? this.typeCopy() : this.deleteCopy()
  }

  private typeCopy(): void {
    const isStillTyping: boolean = this.typingIndex < this.currentTypewriterText.length

    isStillTyping ? this.typeNextLetter() : this.startBackspacing()
  }

  private deleteCopy(): void {
    this.displayText.length ? this.deleteNextLetter() : this.startTypingNextTitle()
  }

  private typeNextLetter(): void {
    this.displayText += this.currentTypewriterText[this.typingIndex]
    this.typingIndex++
    setTimeout(() => this.typewriter(), this.typingSpeed * 2)
  }

  private deleteNextLetter(): void {
    this.displayText = this.displayText.substring(0, this.displayText.length - 1)
    setTimeout(() => this.typewriter(), this.typingSpeed / 2)
  }

  private startBackspacing(): void {
    this.isBackspacing = true
    setTimeout(() => this.typewriter(), this.typingSpeed * 20)
  }

  private startTypingNextTitle(): void {
    this.isBackspacing = false
    this.typingIndex = 0
    this.textIndex = (this.textIndex + 1) % this.typewriterTexts.length
    setTimeout(() => this.typewriter(), this.typingSpeed)
  }
}
