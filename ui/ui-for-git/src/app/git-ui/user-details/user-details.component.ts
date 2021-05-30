import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitUiService } from '../git-ui.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  username: string;
  user: any;

  constructor(private _gitService: GitUiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(res => {
      this.username = res.id
      this.fetchUserDetails();
    })
  }

  fetchUserDetails() {
    this._gitService.getUserDetails(this.username).subscribe(res => {
      console.log(res);
      this.user = res;
    }); 
  }

  getAvatar(avatarUrl: string) {
    return `url("${avatarUrl}")`;
  }

  openGit(url: string) {
    window.open(url);
  }

}
