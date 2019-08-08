import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GetPlayService } from './get-play.service';

describe('GetPlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPlayService = TestBed.get(GetPlayService);
    expect(service).toBeTruthy();

    

  });
});
