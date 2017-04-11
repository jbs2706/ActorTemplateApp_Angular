import { Component, OnInit } from '@angular/core';
import {ProjectenFirebaseServiceService} from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  providers: [ProjectenFirebaseServiceService]
})

export class ProjectFormComponent implements OnInit {
  project: IProject = null;
  authBackendUid: string;

  constructor(private projectService : ProjectenFirebaseServiceService) {
    this.initProject()
  }

  ngOnInit() {
    this.authBackendUid = this.projectService.getAuthBackendUid()
  }

  initProject(){
    this.project = {title: "" , description: "", analist: "", archived: false}
  }

  public newProject() {
    this.project.analist = this.authBackendUid;
    this.projectService.saveProject(this.project);
    this.initProject();
  }

}
