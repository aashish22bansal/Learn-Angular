import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynammicServerComponent } from './dynammic-server.component';

describe('DynammicServerComponent', () => {
  let component: DynammicServerComponent;
  let fixture: ComponentFixture<DynammicServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynammicServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynammicServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
