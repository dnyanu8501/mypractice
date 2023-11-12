import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livepage3Component } from './livepage3.component';

describe('Livepage3Component', () => {
  let component: Livepage3Component;
  let fixture: ComponentFixture<Livepage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Livepage3Component]
    });
    fixture = TestBed.createComponent(Livepage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
