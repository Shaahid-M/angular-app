import { ElementRef } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';
describe('InputFormatDirective', () => {
    it('should create an instance', () => {
        let value = new ElementRef("");
        const directive = new InputFormatDirective(value);
        expect(directive).toBeTruthy();
    });
});
//# sourceMappingURL=input-format.directive.spec.js.map