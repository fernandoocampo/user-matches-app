import { TestBed, inject } from '@angular/core/testing';

import { UserFinderService } from './user-finder.service';

describe('UserFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFinderService]
    });
  });

  it('should be created', inject([UserFinderService], (service: UserFinderService) => {
    expect(service).toBeTruthy();
  }));
});
