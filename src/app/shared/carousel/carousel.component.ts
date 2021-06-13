import { Component } from '@angular/core'
import { ISlide, CommunitySlides } from '../../../../src/models'
@Component({
  selector: 'carousel',
  styleUrls: ['./carousel.component.scss'],
  template: ` 
    <div class="carousel">
      <button class="carousel-control left" (click)="progressSlide(-1)">Previous</button>
      <div class="inner-carousel">
        <div *ngFor="let slide of slides">
          <div class="slide" [ngClass]="{ 'active': slide.isActive }">
            <img [src]="slide.image" alt="{{ slide.altText }}">
            <div class="caption-container">
              <div class="caption">
                <h3>{{ slide.heading }}</h3>
                <p>{{ slide.body }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="indicators" role="radio-group">
          <ng-container *ngFor="let slide of slides; let i = index">
            <input 
              type="radio"
              name="indicator"
              [id]="'indicator' + i"
              [checked]="slide.isActive"
              (change)="changeSlide(i)"
            >
          </ng-container>
        </div>
      </div>
      <button class="carousel-control right" (click)="progressSlide(1)">Next</button>
    </div>
  `
})
export class CarouselComponent {
  slides: ISlide[] = CommunitySlides

  get currentSlideIndex(): number {
    const currentSlide: ISlide = this.slides.filter(slide => slide.isActive)[0]

    return this.slides.indexOf(currentSlide)
  }

  progressSlide(change: number): void {
    let lastIndex: number = this.slides.length - 1
    let changedIndex: number = this.currentSlideIndex + change

    let newSlideIndex = changedIndex > lastIndex ? 0 : changedIndex < 0 ? lastIndex : changedIndex

    this.changeSlide(newSlideIndex)
  }

  changeSlide(newSlideIndex: number): void {
    this.slides.forEach(slide => slide.isActive = false)
    this.slides[newSlideIndex].isActive = true
  }
}
