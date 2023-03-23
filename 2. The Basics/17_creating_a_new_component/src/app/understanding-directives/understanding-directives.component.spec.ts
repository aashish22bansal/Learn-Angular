import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDirectivesComponent } from './understanding-directives.component';

describe('UnderstandingDirectivesComponent', () => {
  let component: UnderstandingDirectivesComponent;
  let fixture: ComponentFixture<UnderstandingDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
