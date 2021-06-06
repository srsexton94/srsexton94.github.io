import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySlidesComponent } from '../app/pages/about/additional-intro/community-slides/community-slides.component';

describe('CommunitySlidesComponent', () => {
  let component: CommunitySlidesComponent;
  let fixture: ComponentFixture<CommunitySlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitySlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
