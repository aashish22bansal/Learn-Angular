import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentThreePracticingDirectivesComponent } from './assignment-three-practicing-directives.component';

describe('AssignmentThreePracticingDirectivesComponent', () => {
  let component: AssignmentThreePracticingDirectivesComponent;
  let fixture: ComponentFixture<AssignmentThreePracticingDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentThreePracticingDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentThreePracticingDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
