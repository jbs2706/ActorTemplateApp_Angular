import { Component, OnInit } from '@angular/core';
import {ProjectenFirebaseServiceService} from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";

@Component({
  selector: 'app-project-archief',
  templateUrl: './project-archief.component.html',
  styleUrls: ['./project-archief.component.css'],
  providers: [ProjectenFirebaseServiceService]
})
export class ProjectArchiefComponent implements OnInit {
  projecten : Array<IProject> = []

  constructor(private projectService : ProjectenFirebaseServiceService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => this.projecten = res)
  }

}
