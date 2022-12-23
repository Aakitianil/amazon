import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartlistComponent } from './flipkartlist.component';

describe('FlipkartlistComponent', () => {
  let component: FlipkartlistComponent;
  let fixture: ComponentFixture<FlipkartlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
