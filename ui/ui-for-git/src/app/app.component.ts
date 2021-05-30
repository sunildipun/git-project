import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-for-git';

  selectInput = new FormControl('0');
  searchInput = new FormControl();

  constructor(private _router: Router) {}

  search() {
    console.log('Search Value', this.selectInput.value, this.searchInput.value)
    if(this.selectInput.value == '0') {
      this._router.navigate([`app/user/${this.searchInput.value}`]);
    } else {
      this._router.navigate([`app/user-details/${this.searchInput.value}`]);
    }
  }
}
