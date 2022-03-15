import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeditinformationpageComponent } from './employeeeditinformationpage.component';

describe('EmployeeeditinformationpageComponent', () => {
  let component: EmployeeeditinformationpageComponent;
  let fixture: ComponentFixture<EmployeeeditinformationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeeditinformationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeditinformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
