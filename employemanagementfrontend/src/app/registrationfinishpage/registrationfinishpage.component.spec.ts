import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationfinishpageComponent } from './registrationfinishpage.component';

describe('RegistrationfinishpageComponent', () => {
  let component: RegistrationfinishpageComponent;
  let fixture: ComponentFixture<RegistrationfinishpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationfinishpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationfinishpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
