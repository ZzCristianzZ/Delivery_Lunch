import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryLunchComponent } from './delivery-lunch.component';

describe('DeliveryLunchComponent', () => {
  let component: DeliveryLunchComponent;
  let fixture: ComponentFixture<DeliveryLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryLunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
