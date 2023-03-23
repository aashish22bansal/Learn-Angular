import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingCombiningAllFormsOfDataBindingComponent } from './data-binding-combining-all-forms-of-data-binding.component';

describe('DataBindingCombiningAllFormsOfDataBindingComponent', () => {
  let component: DataBindingCombiningAllFormsOfDataBindingComponent;
  let fixture: ComponentFixture<DataBindingCombiningAllFormsOfDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingCombiningAllFormsOfDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingCombiningAllFormsOfDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
