import { TestBed } from '@angular/core/testing';

import { HttpMoviesServiceService } from './http-movies-service.service';

describe('HttpMoviesServiceService', () => {
  let service: HttpMoviesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMoviesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
