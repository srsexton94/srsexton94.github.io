import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'typewriter',
  styleUrls: ['./typewriter.component.scss'],
  template: `
    <p class="typewriter">
      {{ displayText }}
    </p>
  `
})
export class TypewriterComponent implements OnInit {
  @Input() typewriterTexts: string[] = ['hello world!']
  @Input() typingSpeed: number = 50

  displayText: string = ''
  isBackspacing: boolean = false
  textIndex: number = 0
  typingIndex: number = 0

  ngOnInit(): void {
    this.typewriter()
  }

  private typewriter(): void {
    !this.isBackspacing ? this.typeCopy() : this.deleteCopy()
  }

  private typeCopy(): void {
    const isStillTyping: boolean = this.typingIndex < this.typewriterTexts[this.textIndex].length

    isStillTyping ? this.typeNextLetter() : this.startBackspacing()
  }

  private deleteCopy(): void {
    this.displayText.length ? this.deleteNextLetter() : this.startTypingNextTitle()
  }

  private typeNextLetter(): void {
    this.displayText += this.typewriterTexts[this.textIndex][this.typingIndex]
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
