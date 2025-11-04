import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBackground } from './welcome-background';

describe('WelcomeBackground', () => {
  let component: WelcomeBackground;
  let fixture: ComponentFixture<WelcomeBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
