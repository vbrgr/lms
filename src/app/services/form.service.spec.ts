import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormService', () => {
  let formService: FormService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: FormService = TestBed.get(FormService);
    expect(service).toBeTruthy();
  });

  /* it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const formServiceSpy =
      jasmine.createSpyObj('FormService', ['getForm']);
    const stubValue = 'stub value';
    formServiceSpy.getForm.and.returnValue(stubValue);
    formService = new FormService(formServiceSpy);
    expect(formServiceSpy.getForm.calls.mostRecent().returnValue)
      .toBe(stubValue);
  }); */

});
