import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/shared/data.service';
import { Observable } from 'rxjs/Observable';
import { pipe, map } from 'rxjs/operators';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList = [];
  urlEmployees = './employees';

  constructor( private http: HttpClient, private _service: DataService ) { }

  ngOnInit() {
    const petition = this.http.get(this.urlEmployees);

    // petition.pipe(
    //   map( data => this.employeeList = data )
    // ).subscribe();

    petition.subscribe(
      (response: any) => {
        console.log('Respuesta petition', response);
        response.forEach(element => {
          this.employeeList.push(element);
        });
        
      }
    );

    console.log('datos to render', this.employeeList);



  }

}
