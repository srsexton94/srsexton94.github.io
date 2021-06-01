import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalIntroComponent } from '../app/pages/about/additional-intro/additional-intro.component';

describe('AdditionalIntroComponent', () => {
  let component: AdditionalIntroComponent;
  let fixture: ComponentFixture<AdditionalIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
