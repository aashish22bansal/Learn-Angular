import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent } from './understanding-directives-styling-elements-dynamically-with-ngstyle.component';

describe('UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent', () => {
  let component: UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent;
  let fixture: ComponentFixture<UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDirectivesStylingElementsDynamicallyWithNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
