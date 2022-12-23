import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifeHusbendComponent } from './wife-husbend.component';

describe('WifeHusbendComponent', () => {
  let component: WifeHusbendComponent;
  let fixture: ComponentFixture<WifeHusbendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifeHusbendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifeHusbendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
