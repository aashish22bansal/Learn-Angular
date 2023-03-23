import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventBindingComponent } from './data-binding-event-binding.component';

describe('DataBindingEventBindingComponent', () => {
  let component: DataBindingEventBindingComponent;
  let fixture: ComponentFixture<DataBindingEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingEventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
