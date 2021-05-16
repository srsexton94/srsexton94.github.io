import { Component, OnInit } from '@angular/core'
import { interval, timer } from 'rxjs'
import { DevTitleList } from '../../../models/titles'

@Component({
  selector: 'home-page',
  styleUrls: ['./home.component.scss'],
  template: `
    <section class="page-section">
      <div class="section-body">
        <h1>Samantha Rose Sexton</h1>
        <p class="typewriter">
          {{ typewriterDisplay }}
        </p>
        <ul class="socials">
          <li class="social-button">
            <social-link addClasses="button" linkType="linkedin"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="button" linkType="github"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="button" linkType="email"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="button" linkType="resume"></social-link>
          </li>
        </ul>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  isBackspacing: boolean = false
  typewriterDisplay: string = ''
  copyIndex: number = 0
  typingIndex: number = 0

  ngOnInit(): void {
    this.typeWriter()
  }

  private typeWriter(): void {
    this.isBackspacing ? this.deleteCopy() : this.typeCopy()
  }

  private deleteCopy(): void {
    this.typewriterDisplay.length ? this.deleteNextLetter() : this.startTypingNextTitle()
  }

  private typeCopy(): void {
    const isStillTyping: boolean = this.typingIndex < DevTitleList[this.copyIndex].length

    isStillTyping ? this.typeNextLetter() : this.startBackspacing()
  }

  private deleteNextLetter(): void {
    this.typewriterDisplay = this.typewriterDisplay.substring(0, this.typewriterDisplay.length - 1)
    setTimeout(() => this.typeWriter(), 25)
  }

  private startTypingNextTitle(): void {
    this.isBackspacing = false
    this.typingIndex = 0
    this.copyIndex = (this.copyIndex + 1) % DevTitleList.length
    setTimeout(() => this.typeWriter(), 50)
  }

  private typeNextLetter(): void {
    this.typewriterDisplay += DevTitleList[this.copyIndex][this.typingIndex]
    this.typingIndex++
    setTimeout(() => this.typeWriter(), 100)
  }

  private startBackspacing(): void {
    this.isBackspacing = true
    setTimeout(() => this.typeWriter(), 1000)
  }
}