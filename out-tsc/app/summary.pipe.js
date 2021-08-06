import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class SummaryPipe {
    transform(value, args) {
        if (!value)
            return null;
        let actualLimit = args.toString();
        // + (test ? test : '')
        return value.substr(0, 50) + '...' + actualLimit;
    }
}
SummaryPipe.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); };
SummaryPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "summary", type: SummaryPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryPipe, [{
        type: Pipe,
        args: [{
                name: 'summary'
            }]
    }], null, null); })();
//# sourceMappingURL=summary.pipe.js.map