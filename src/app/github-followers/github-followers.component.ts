import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';//for combining multiple observables
//import 'rxjs/add/observable/combineLatest';//static method under observable class to combine observables

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers = [
    { id: 1, name: 'sarah1' },
    { id: 2, name: 'casey2' },
    { id: 3, name: 'chuck3' },
  ];

  constructor(private route: ActivatedRoute) {    
  }
  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
    })

//get parameters:
//    this.route.paramMap.subscribe();
//    let id = this.route.snapshot.paramMap.get('id');

//get query strings:
    //let page = this.route.snapshot.queryParamMap.get('page');
//    this.route.queryParamMap.subscribe(params => {
//    });

  }
}
