import { TestBed } from '@angular/core/testing';

import { GroupTemplateService } from './group-template.service';

describe('GroupTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupTemplateService = TestBed.get(GroupTemplateService);
    expect(service).toBeTruthy();
  });
});
