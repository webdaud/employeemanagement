import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployelistpageComponent } from './employelistpage.component';

describe('EmployelistpageComponent', () => {
  let component: EmployelistpageComponent;
  let fixture: ComponentFixture<EmployelistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployelistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployelistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
