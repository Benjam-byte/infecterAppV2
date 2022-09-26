import { TestBed } from '@angular/core/testing';

import { CarouCardService } from './carou-card.service';

describe('CarouCardService', () => {
  let service: CarouCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
