import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailpageComponent } from './employeedetailpage.component';

describe('EmployeedetailpageComponent', () => {
  let component: EmployeedetailpageComponent;
  let fixture: ComponentFixture<EmployeedetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
