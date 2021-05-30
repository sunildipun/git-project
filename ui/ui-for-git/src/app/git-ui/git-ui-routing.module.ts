import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUiComponent } from './git-ui.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';


const routes: Routes = [
  {
    path: '', component: GitUiComponent
  },
  {
    path: 'repo/:id', component: RepoDetailsComponent
  },
  {
    path: 'user/:id', component: UserRepoListComponent
  },
  {
    path: 'user-details/:id', component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitUiRoutingModule { }
