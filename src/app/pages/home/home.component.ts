import { Component, OnInit } from '@angular/core'
import { timer } from 'rxjs'
import { DevTitleList } from '../../../models/titles'

@Component({
  selector: 'home-page',
  styleUrls: ['./home.component.scss'],
  template: `
    <section class="page-section">
      <div class="section-body">
        <h1>Samantha Rose Sexton</h1>
        <p class="typewriter">
          {{ typewriterCopy }}
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
  typewriterCount: number = 0
  typewriterIndex: number = 0

  get typewriterCopy(): string {
    return DevTitleList[this.typewriterIndex]
  }

  ngOnInit(): void {
    this.timerSubscription()
  }

  private timerSubscription(): void {
    timer(5000, 3000).subscribe(() => {
      this.setTypewriterIndex()
    })
  }

  private setTypewriterIndex(): void {
    this.typewriterIndex === DevTitleList.length - 1 
      ? this.typewriterIndex = 0
      : this.typewriterIndex++
  }
}
