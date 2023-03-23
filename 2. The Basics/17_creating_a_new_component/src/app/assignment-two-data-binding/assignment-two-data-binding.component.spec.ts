import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTwoDataBindingComponent } from './assignment-two-data-binding.component';

describe('AssignmentTwoDataBindingComponent', () => {
  let component: AssignmentTwoDataBindingComponent;
  let fixture: ComponentFixture<AssignmentTwoDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentTwoDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentTwoDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
