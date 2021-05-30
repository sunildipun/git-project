import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitUiService } from '../git-ui.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  repos: any[] = [];

  constructor(private _gitService: GitUiService, private _router: Router) { }

  ngOnInit(): void {
    this.fetchRepo();
  }

  fetchRepo() {
    this._gitService.getRepo().subscribe((res: any[]) => {
      this.repos = res;
    });
  }

  // [ngStyle]="{'color': getRepoImage(repo.image)}"
  // openGit(repo: any) {
  //   this._router.navigate([`/app/repo/${repo.full_name}`])
  // }

  openGit(url: string) {
    window.open(url);
  }

}
