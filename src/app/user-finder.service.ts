import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './users';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserFinderService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

}
