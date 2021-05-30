import { TestBed } from '@angular/core/testing';

import { GitUiService } from './git-ui.service';

describe('GitUiService', () => {
  let service: GitUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
