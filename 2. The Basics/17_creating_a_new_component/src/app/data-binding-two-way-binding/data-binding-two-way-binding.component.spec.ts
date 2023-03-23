import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTwoWayBindingComponent } from './data-binding-two-way-binding.component';

describe('DataBindingTwoWayBindingComponent', () => {
  let component: DataBindingTwoWayBindingComponent;
  let fixture: ComponentFixture<DataBindingTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingTwoWayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
