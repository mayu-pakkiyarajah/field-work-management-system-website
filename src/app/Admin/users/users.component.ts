import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  customers:any[] = [];

  constructor() {
  }

  ngOnInit() {
  this.loadUsers()
  }

  loadUsers(){

  }
}