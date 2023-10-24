import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupstudentComponent } from './signupstudent.component';

describe('SignupstudentComponent', () => {
  let component: SignupstudentComponent;
  let fixture: ComponentFixture<SignupstudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupstudentComponent]
    });
    fixture = TestBed.createComponent(SignupstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
