import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsuccessComponent } from './studentsuccess.component';

describe('StudentsuccessComponent', () => {
  let component: StudentsuccessComponent;
  let fixture: ComponentFixture<StudentsuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsuccessComponent]
    });
    fixture = TestBed.createComponent(StudentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
