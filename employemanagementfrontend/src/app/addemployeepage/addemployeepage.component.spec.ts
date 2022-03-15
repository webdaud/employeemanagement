import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeepageComponent } from './addemployeepage.component';

describe('AddemployeepageComponent', () => {
  let component: AddemployeepageComponent;
  let fixture: ComponentFixture<AddemployeepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
