import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { User } from '../user';
import { Result } from '../result';
import { USERS } from '../users';
import { UserFilter } from '../user-filter';
import { UserFinderService } from '../user-finder.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  result: Result;
  results: Result[];
  users: User[];

  model = new UserFilter();

  constructor(private userFinderService: UserFinderService) { }

  ngOnInit() {
  }

  /**
   * it is in charge to convert the service result in a array.
   * @param val 
   */
  hack(val) {
    if (val != null) {
      return Array.from(val);
    }
  }

  /**
   * invokes the service to search users that match the filters.
   */
  getUsers(): void {
    this.userFinderService.getUsers()
    .subscribe((result: Result[]) => { this.results = <Result[]>result });
  }

}
