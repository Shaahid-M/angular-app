import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //to get the actual parameter:
    //(for if user will definately leave page before returning, get the data directly)
    let id = this.route.snapshot.paramMap.get('username');

    console.log(id);

    //to get the parameter through observable method:
    //(for if user stays on page, page only gets initialised once)
    this.route.paramMap
      .subscribe(params => {
        params.get("username");
        console.log(params);
      });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 20, order: 'newest' }
    })
  }


}
