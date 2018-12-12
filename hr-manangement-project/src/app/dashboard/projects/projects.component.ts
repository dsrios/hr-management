import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/shared/data.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsList = [];
  urlProjects = './projects';


  displayedColumns: string[] = ['id', 'name', 'team_size', 'client_name'];
  dataSource = new MatTableDataSource(this.projectsList);

  constructor(  private http: HttpClient, private _service: DataService  ) {
    const petition = this.http.get(this.urlProjects);

    petition.subscribe(
      (response: any) => {
        // console.log('Respuesta petition', response);
        this.dataSource = new MatTableDataSource(response);
        response.forEach(element => {
          this.projectsList.push(element);
        });
      }
    );

    this.dataSource = new MatTableDataSource(this.projectsList);
   }

  ngOnInit() {
  }


}


/*
id : 1,
        name: 'Herzogville',
        team_size : 7,
        client_name : 'Heidenreichmouth'
        */
