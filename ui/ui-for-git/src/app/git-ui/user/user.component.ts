import { Component, OnInit } from '@angular/core';
import { GitUiService } from '../git-ui.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any[] = [];

  constructor(private _gitService: GitUiService) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(): void {
    this._gitService.getUser().subscribe((res: any[]) => {
      this.users = res;
    });
  }

  getAvatar(avatarUrl: string) {
    return `url("${avatarUrl}")`;
  }

  openGit(url: string) {
    window.open(url);
    // this._router.navigate([`app/user/${this.searchInput.value}`]);
  }

}
