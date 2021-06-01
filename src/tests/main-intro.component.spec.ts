import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIntroComponent } from '../app/pages/about/main-intro/main-intro.component';

describe('MainIntroComponent', () => {
  let component: MainIntroComponent;
  let fixture: ComponentFixture<MainIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
