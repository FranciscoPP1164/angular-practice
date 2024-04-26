import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../types/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  userId!: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const userId = routeParams.get('userId');

    if (!userId) {
      return;
    }

    this.userId = userId;
  }

  handleClickDeleteButton() {}
}
