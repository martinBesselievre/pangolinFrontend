import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';
describe('ContactService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ContactService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=contact.service.spec.js.map