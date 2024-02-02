import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolwearHomeComponent } from './schoolwear-home.component';

describe('SchoolwearHomeComponent', () => {
  let component: SchoolwearHomeComponent;
  let fixture: ComponentFixture<SchoolwearHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolwearHomeComponent]
    });
    fixture = TestBed.createComponent(SchoolwearHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
