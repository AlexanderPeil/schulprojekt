import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolwearComponent } from './schoolwear.component';

describe('SchoolwearComponent', () => {
  let component: SchoolwearComponent;
  let fixture: ComponentFixture<SchoolwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolwearComponent]
    });
    fixture = TestBed.createComponent(SchoolwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
