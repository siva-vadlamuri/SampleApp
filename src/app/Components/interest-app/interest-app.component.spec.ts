import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAppComponent } from './interest-app.component';

describe('InterestAppComponent', () => {
  let component: InterestAppComponent;
  let fixture: ComponentFixture<InterestAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
