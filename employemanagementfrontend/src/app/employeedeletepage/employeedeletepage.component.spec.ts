import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedeletepageComponent } from './employeedeletepage.component';

describe('EmployeedeletepageComponent', () => {
  let component: EmployeedeletepageComponent;
  let fixture: ComponentFixture<EmployeedeletepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedeletepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedeletepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
