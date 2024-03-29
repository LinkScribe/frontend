import { TestBed } from '@angular/core/testing';

import { LinkScribeService } from './link-scribe.service';

describe('LinkScribeService', () => {
  let service: LinkScribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkScribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
