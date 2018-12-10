import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class LoginService implements InMemoryDbService  {
  createDb() {
    const loginUsers = [
      { username: 'dsrios', password: '1991'},
      { username: 'administrator', password: 'Yuxi2018'}
    ];
    return {loginUsers};
  }

  constructor() { }


}
