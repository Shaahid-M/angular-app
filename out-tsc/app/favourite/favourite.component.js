import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "bi-star-fill": a0, "bi-star": a1 }; };
const _c1 = function (a0, a1, a2) { return { "backgroundColor": a0, "color": a1, "fontWeight": a2 }; };
export class FavouriteComponent {
    constructor() {
        //parameters parsed to keep build stable:
        this.isFavorite = false;
        this.change = new EventEmitter();
    }
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(); };
FavouriteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavouriteComponent, selectors: [["favourite"]], inputs: { isFavorite: "isFavorite" }, outputs: { change: "change" }, decls: 12, vars: 13, consts: [[1, "bi", "icon-sizing", 3, "click"], [1, "bi", "bi-star-fill"], [1, "bi", "bi-star"], [1, "bi", "icon-sizing", 3, "ngClass", "click"], [3, "ngStyle"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1");
        i0.ɵɵtext(1, "Hello World");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "span", 0);
        i0.ɵɵlistener("click", function FavouriteComponent_Template_span_click_2_listener() { return ctx.onClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "span", 1);
        i0.ɵɵelement(4, "span", 2);
        i0.ɵɵtext(5, " ngClass:\n");
        i0.ɵɵelementStart(6, "span", 3);
        i0.ɵɵlistener("click", function FavouriteComponent_Template_span_click_6_listener() { return ctx.onClick(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(7, " ngStyle:\n");
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵtext(9, " Save\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11, "favourite works!");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("bi-star-fill", ctx.isFavorite)("bi-star", !ctx.isFavorite);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(6, _c0, ctx.isFavorite, !ctx.isFavorite));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction3(9, _c1, ctx.isFavorite ? "blue" : "gray", ctx.isFavorite ? "white" : "black", ctx.isFavorite ? "bold" : "normal"));
    } }, directives: [i1.NgClass, i1.NgStyle], styles: [".icon-sizing[_ngcontent-%COMP%] {\n    font-size: 50px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavouriteComponent, [{
        type: Component,
        args: [{
                selector: 'favourite',
                templateUrl: './favourite.component.html',
                styleUrls: ['./favourite.component.css']
            }]
    }], null, { isFavorite: [{
            type: Input,
            args: ['isFavorite']
        }], change: [{
            type: Output,
            args: ['change']
        }] }); })();
//# sourceMappingURL=favourite.component.js.map