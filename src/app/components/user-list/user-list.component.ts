import { Component } from '@angular/core';
import { User } from '../../types/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'Carlitos', email: 'carlitos@gmail.com', age: 20 },
    { id: 2, name: 'Maria', email: 'maria@gmail.com', age: 35 },
    { id: 3, name: 'Sebastian', email: 'sebastian@gmail.com', age: 50 },
  ];

  addUser(newUser: User) {
    const newUsersList = [...this.users, newUser];
    this.users = newUsersList;
  }

  removeUser(id: number) {
    const newUsersList = this.users.filter((user: User) => user.id !== id);
    this.users = newUsersList;
  }
}
