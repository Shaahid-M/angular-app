import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return { page: 1, order: "newest" }; };
export class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["navbar"]], decls: 12, vars: 2, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 1, "btn", "btn-secondary"], ["routerLink", "followers", 3, "queryParams"], ["routerLink", "posts/"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "ul", 3);
        i0.ɵɵelementStart(4, "li", 4);
        i0.ɵɵelementStart(5, "a", 5);
        i0.ɵɵtext(6, "Followers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "li", 4);
        i0.ɵɵelementStart(8, "a", 6);
        i0.ɵɵtext(9, "Posts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h1");
        i0.ɵɵtext(11, "navbar works");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
    } }, directives: [i1.RouterLinkActive, i1.RouterLinkWithHref], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=navbar.component.js.map