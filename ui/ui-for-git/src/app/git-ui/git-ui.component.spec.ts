import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUiComponent } from './git-ui.component';

describe('GitUiComponent', () => {
  let component: GitUiComponent;
  let fixture: ComponentFixture<GitUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
