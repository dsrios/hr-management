import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/shared/data.service';
import { map } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList = [{Id: 0,
    age: 36,
    birthday: '8/27/2005',
    company: 'Croatia',
    favorite_color: 'non',
    name: 'Mrs. Rickey Dicki',
    project: 'Herzogville Clarabelle'
  }];
  urlEmployees = './employees';
  displayedColumns: string[] = ['Id', 'name', 'age', 'project', 'birthday', 'company', 'favorite_color'];
  dataSource = new MatTableDataSource(this.employeeList);

  constructor( private http: HttpClient, private _service: DataService ) {
    const petition = this.http.get(this.urlEmployees);

    // petition.pipe(
    //   map( data => this.employeeList = data )
    // ).subscribe();

    petition.subscribe(
      (response: any) => {
        // console.log('Respuesta petition', response);
        this.dataSource = new MatTableDataSource(response);
        response.forEach(element => {
          this.employeeList.push(element);
        });
      }
    );

    console.log('datos to render', this.employeeList);
    this.dataSource = new MatTableDataSource(this.employeeList);
  }

  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // this.dataSource.sort = this.sort;
  }

}
