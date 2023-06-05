import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeImgLinkComponent } from '../app/pages/about/resume-preview/resume-preview.component';

describe('ResumeImgLinkComponent', () => {
  let component: ResumeImgLinkComponent;
  let fixture: ComponentFixture<ResumeImgLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeImgLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeImgLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
