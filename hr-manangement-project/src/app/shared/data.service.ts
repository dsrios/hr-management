import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        name: 'Mrs. Rickey Dicki',
        age: 36,
        Id: 0,
        project: 'Herzogville Clarabelle',
        birthday: '8/27/2005',
        favorite_color: 'non',
        company: 'Croatia'
      },
      {
        name: 'Joannie Heathcote',
        age: 98,
        Id: 1,
        project: 'Herzogville',
        birthday: '8/10/2015',
        favorite_color: 'et',
        company: 'Grenada'
      },
      {
        name: 'Braxton Goyette',
        age: 53,
        Id: 2,
        project: 'Herzogville',
        birthday: '8/16/1988',
        favorite_color: 'quidem',
        company: 'Croatia'
      },
      {
        name: 'Golda Spencer',
        age: 35,
        Id: 3,
        project: 'Herzogville',
        birthday: '1/25/2016',
        favorite_color: 'qui',
        company: 'Dominican Republic'
      },
      {
        name: 'Blanche Hoppe',
        age: 37,
        Id: 4,
        project: 'Herzogville',
        birthday: '2/18/1993',
        favorite_color: 'omnis',
        company: 'Kazakhstan'
      },
      {
        name: 'Mary Hane',
        age: 40,
        Id: 5,
        project: 'Herzogville',
        birthday: '8/27/1993',
        favorite_color: 'perferendi',
        company: 'Lithuania'
      },
      {
        name: 'Reyes Wilkinson',
        age: 46,
        Id: 6,
        project: 'Herzogville',
        birthday: '5/25/2001',
        favorite_color: 'praesentiu',
        company: 'Brazil'
      },
      {
        name: 'Jerome Herman',
        age: 99,
        Id: 7,
        project: 'Namibia',
        birthday: '2/14/2000',
        favorite_color: 'cupiditat',
        company: 'Namibia'
      },
      {
        name: 'Susan Stamm',
        age: 93,
        Id: 8,
        project: 'Namibia',
        birthday: '8/6/2005',
        favorite_color: 'ex',
        company: 'Réunion'
      },
      {
        name: 'Victoria Mayer',
        age: 20,
        Id: 9,
        project: 'Namibia',
        birthday: '7/11/2001',
        favorite_color: 'veniam',
        company: 'Belarus'
      },
      {
        name: 'Rhoda Schmeler',
        age: 30,
        Id: 10,
        project: 'Namibia',
        birthday: '4/13/2011',
        favorite_color: 'a',
        company: 'Tokelau'
      },
      {
        name: 'Namibio Tokelau',
        age: 24,
        Id: 11,
        project: 'Namibia',
        birthday: '4/17/1985',
        favorite_color: 'dolore',
        company: 'China'
      },
      {
        name: 'Dr. Haskell Conn',
        age: 11,
        Id: 12,
        project: 'Namibia',
        birthday : '2/7/1992',
        favorite_color: 'eaque',
        company: 'Germany'
      },
      {
        name: 'Magdalena Treutel',
        age: 40,
        Id: 13,
        project: 'Namibia',
        birthday: '7/23/2017',
        favorite_color: 'itaque',
        company: 'Niger'
      }

    ];

    const projects = [
      {
        id : 1,
        name: 'Herzogville',
        team_size : 7,
        client_name : 'Heidenreichmouth'
      },
      {
        id : 2,
        name: 'Namibia',
        team_size : 8,
        client_name : 'East Clarabelle'
      }
    ];

    return {employees, projects};
  }

  constructor() { }
}
