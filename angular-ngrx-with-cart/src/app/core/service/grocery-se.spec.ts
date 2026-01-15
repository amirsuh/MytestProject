import { TestBed } from '@angular/core/testing';

import { GrocerySe } from './grocery-se';

describe('GrocerySe', () => {
  let service: GrocerySe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrocerySe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
