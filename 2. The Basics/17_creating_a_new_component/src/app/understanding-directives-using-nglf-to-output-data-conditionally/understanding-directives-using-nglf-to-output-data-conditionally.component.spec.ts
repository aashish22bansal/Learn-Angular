import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent } from './understanding-directives-using-nglf-to-output-data-conditionally.component';

describe('UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent', () => {
  let component: UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent;
  let fixture: ComponentFixture<UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDirectivesUsingNglfToOutputDataConditionallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
