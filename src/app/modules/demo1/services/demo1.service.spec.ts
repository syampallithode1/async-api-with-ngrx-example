import { TestBed } from '@angular/core/testing';

import { Demo1Service } from './demo1.service';

describe('Demo1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Demo1Service = TestBed.get(Demo1Service);
    expect(service).toBeTruthy();
  });
});
