import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContainerComponent } from '../app/pages/about/additional-intro/video-container/video-container.component';

describe('VideoContainerComponent', () => {
  let component: VideoContainerComponent;
  let fixture: ComponentFixture<VideoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
