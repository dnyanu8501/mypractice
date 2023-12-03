import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtblComponent } from './searchtbl.component';

describe('SearchtblComponent', () => {
  let component: SearchtblComponent;
  let fixture: ComponentFixture<SearchtblComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtblComponent]
    });
    fixture = TestBed.createComponent(SearchtblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
