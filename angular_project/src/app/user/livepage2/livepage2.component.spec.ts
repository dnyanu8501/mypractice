import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livepage2Component } from './livepage2.component';

describe('Livepage2Component', () => {
  let component: Livepage2Component;
  let fixture: ComponentFixture<Livepage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Livepage2Component]
    });
    fixture = TestBed.createComponent(Livepage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
