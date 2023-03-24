import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDirectivesOutputtingListsWithNgForComponent } from './understanding-directives-outputting-lists-with-ng-for.component';

describe('UnderstandingDirectivesOutputtingListsWithNgForComponent', () => {
  let component: UnderstandingDirectivesOutputtingListsWithNgForComponent;
  let fixture: ComponentFixture<UnderstandingDirectivesOutputtingListsWithNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingDirectivesOutputtingListsWithNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDirectivesOutputtingListsWithNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
