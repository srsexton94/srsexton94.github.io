import { Component, OnInit } from '@angular/core';
import { ISlide, CommunitySlides } from '../../../../models';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'carousel',
  styleUrls: ['./carousel.component.scss'],
  template: `
    <div class="carousel">
      <button
        class="carousel-control left"
        aria-label="Previous slide"
        (click)="progressSlide(-1)"
      >
        <fa-icon class="icon" [icon]="leftArrow"></fa-icon>
      </button>
      <div class="inner-carousel">
        <div *ngFor="let slide of slides">
          <div class="slide" [ngClass]="{ active: slide.isActive }">
            <img [src]="slide.image" alt="{{ slide.altText }}" />
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
              [attr.aria-label]="'Slide number ' + (i + 1)"
              [checked]="slide.isActive"
              (change)="changeSlide(i)"
            />
          </ng-container>
        </div>
      </div>
      <button
        class="carousel-control right"
        aria-label="Next Slide"
        (click)="progressSlide(1)"
      >
        <fa-icon class="icon" [icon]="rightArrow"></fa-icon>
      </button>
    </div>
  `,
})
export class CarouselComponent implements OnInit {
  currentTimer: ReturnType<typeof setTimeout> = setTimeout(() => {}, 1000);
  leftArrow: IconProp = faAngleLeft;
  rightArrow: IconProp = faAngleRight;
  slides: ISlide[] = CommunitySlides;

  get currentSlideIndex(): number {
    const currentSlide: ISlide = this.slides.filter(
      (slide) => slide.isActive
    )[0];

    return this.slides.indexOf(currentSlide);
  }

  ngOnInit(): void {
    this.startTimer();
  }

  progressSlide(change: number): void {
    let lastIndex: number = this.slides.length - 1;
    let changedIndex: number = this.currentSlideIndex + change;

    let newSlideIndex =
      changedIndex > lastIndex
        ? 0
        : changedIndex < 0
        ? lastIndex
        : changedIndex;

    this.changeSlide(newSlideIndex);
  }

  changeSlide(newSlideIndex: number): void {
    this.stopTimer();
    this.slides.forEach((slide) => (slide.isActive = false));
    this.slides[newSlideIndex].isActive = true;
    this.startTimer();
  }

  stopTimer(): void {
    clearInterval(this.currentTimer);
  }

  startTimer(): void {
    console.log(typeof this.currentTimer);
    this.currentTimer = setInterval(() => {
      this.progressSlide(1);
    }, 8000);
  }
}
