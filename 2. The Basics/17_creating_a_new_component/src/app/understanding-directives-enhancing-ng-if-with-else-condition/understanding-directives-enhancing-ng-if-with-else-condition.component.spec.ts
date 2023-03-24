import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent } from './understanding-directives-enhancing-ng-if-with-else-condition.component';

describe('UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent', () => {
  let component: UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent;
  let fixture: ComponentFixture<UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDirectivesEnhancingNgIfWithElseConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
