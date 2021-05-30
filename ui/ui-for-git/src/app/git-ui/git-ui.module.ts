import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitUiRoutingModule } from './git-ui-routing.module';
import { GitUiComponent } from './git-ui.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {MatButtonModule} from '@angular/material/button';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [GitUiComponent, UserComponent, RepoComponent, RepoDetailsComponent, UserRepoListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    GitUiRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class GitUiModule { }
