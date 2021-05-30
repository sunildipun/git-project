import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitUiService } from '../git-ui.service';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html',
  styleUrls: ['./user-repo-list.component.scss']
})
export class UserRepoListComponent implements OnInit {

  repos: any[] = [];
  username: string;
  errorText: string;

  constructor(private _gitService: GitUiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.username = this._activatedRoute.snapshot.params.id;
    this._activatedRoute.params.subscribe(res => {
      this.username = res.id
      this.fetchRepoList();
    })
    // console.log(this.username)

  }

  fetchRepoList() {
    this._gitService.getUserRepo(this.username).subscribe((res: any[]) => {
      this.repos = res
    }, error => {
      this.errorText = error.message
      this.repos = [];
    });
  }

  openGit(url: string) {
    window.open(url);
  }

}
