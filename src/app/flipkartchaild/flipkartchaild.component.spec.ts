import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartchaildComponent } from './flipkartchaild.component';

describe('FlipkartchaildComponent', () => {
  let component: FlipkartchaildComponent;
  let fixture: ComponentFixture<FlipkartchaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartchaildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartchaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
