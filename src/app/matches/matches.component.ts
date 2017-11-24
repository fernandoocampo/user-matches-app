import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserFinderService } from '../user-finder.service'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  users: User[]

  constructor(private userFinderService: UserFinderService) { }

  ngOnInit() {
  }

  getUsers(): void {
    this.userFinderService.getUsers()
    .subscribe(users => this.users = users);
  }

}
