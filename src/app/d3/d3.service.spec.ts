import { TestBed } from '@angular/core/testing';

import { D3Service } from './d3.service';

describe('D3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: D3Service = TestBed.get(D3Service);
    expect(service).toBeTruthy();
  });
});
