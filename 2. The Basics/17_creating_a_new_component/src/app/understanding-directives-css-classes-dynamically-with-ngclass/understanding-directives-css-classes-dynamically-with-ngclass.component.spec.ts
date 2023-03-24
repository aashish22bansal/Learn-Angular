import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent } from './understanding-directives-css-classes-dynamically-with-ngclass.component';

describe('UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent', () => {
  let component: UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent;
  let fixture: ComponentFixture<UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDirectivesCssClassesDynamicallyWithNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
