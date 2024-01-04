import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandinScreenComponent } from './landin-screen.component';

describe('LandinScreenComponent', () => {
  let component: LandinScreenComponent;
  let fixture: ComponentFixture<LandinScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandinScreenComponent]
    });
    fixture = TestBed.createComponent(LandinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
