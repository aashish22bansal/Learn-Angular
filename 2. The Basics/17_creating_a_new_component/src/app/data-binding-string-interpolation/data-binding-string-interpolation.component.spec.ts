import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingStringInterpolationComponent } from './data-binding-string-interpolation.component';

describe('DataBindingStringInterpolationComponent', () => {
  let component: DataBindingStringInterpolationComponent;
  let fixture: ComponentFixture<DataBindingStringInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingStringInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
