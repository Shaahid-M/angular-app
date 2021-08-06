import { Component } from '@angular/core';
import { combineLatest } from 'rxjs'; //for combining multiple observables
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
const _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function GithubFollowersComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const follower_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, follower_r1.name, follower_r1.id));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", follower_r1.name, " ");
} }
//import 'rxjs/add/observable/combineLatest';//static method under observable class to combine observables
export class GithubFollowersComponent {
    constructor(route) {
        this.route = route;
        this.followers = [
            { id: 1, name: 'sarah1' },
            { id: 2, name: 'casey2' },
            { id: 3, name: 'chuck3' },
        ];
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .subscribe(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
        });
        //get parameters:
        //    this.route.paramMap.subscribe();
        //    let id = this.route.snapshot.paramMap.get('id');
        //get query strings:
        //let page = this.route.snapshot.queryParamMap.get('page');
        //    this.route.queryParamMap.subscribe(params => {
        //    });
    }
}
GithubFollowersComponent.ɵfac = function GithubFollowersComponent_Factory(t) { return new (t || GithubFollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
GithubFollowersComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubFollowersComponent, selectors: [["app-github-followers"]], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function GithubFollowersComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "github-followers works!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul");
        i0.ɵɵtemplate(3, GithubFollowersComponent_li_3_Template, 3, 5, "li", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.followers);
    } }, directives: [i2.NgForOf, i1.RouterLinkWithHref], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowersComponent, [{
        type: Component,
        args: [{
                selector: 'app-github-followers',
                templateUrl: './github-followers.component.html',
                styleUrls: ['./github-followers.component.css']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=github-followers.component.js.map