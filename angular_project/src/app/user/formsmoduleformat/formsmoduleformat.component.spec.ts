import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsmoduleformatComponent } from './formsmoduleformat.component';

describe('FormsmoduleformatComponent', () => {
  let component: FormsmoduleformatComponent;
  let fixture: ComponentFixture<FormsmoduleformatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsmoduleformatComponent]
    });
    fixture = TestBed.createComponent(FormsmoduleformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
