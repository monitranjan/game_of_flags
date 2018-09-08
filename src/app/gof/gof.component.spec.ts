import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GofComponent } from './gof.component';

describe('GofComponent', () => {
  let component: GofComponent;
  let fixture: ComponentFixture<GofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
