import { TestBed, inject } from '@angular/core/testing';

import { ProjectenFirebaseServiceService } from './projecten-firebase-service.service';

describe('ProjectenFirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectenFirebaseServiceService]
    });
  });

  it('should ...', inject([ProjectenFirebaseServiceService], (service: ProjectenFirebaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
