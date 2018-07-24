import { Injectable } from '@angular/core';

import { USERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(name, password) {
    return USERS.map((value, index, a) => {
      if (value.name === name && value.password === password) {
        return value;
      }
    });
  }
}
