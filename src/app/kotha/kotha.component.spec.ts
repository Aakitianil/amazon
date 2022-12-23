import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KothaComponent } from './kotha.component';

describe('KothaComponent', () => {
  let component: KothaComponent;
  let fixture: ComponentFixture<KothaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KothaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KothaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
