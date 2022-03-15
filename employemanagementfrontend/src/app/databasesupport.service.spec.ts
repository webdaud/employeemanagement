import { TestBed } from '@angular/core/testing';

import { DatabasesupportService } from './databasesupport.service';

describe('DatabasesupportService', () => {
  let service: DatabasesupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasesupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
