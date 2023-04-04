import { TestBed } from '@angular/core/testing';
import { ConducteurService } from './conducteur.service';
import { from } from 'rxjs';

describe('ServicesService', () => {
  let service: ConducteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConducteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
