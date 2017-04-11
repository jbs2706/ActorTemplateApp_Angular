import { Component, OnInit} from '@angular/core';
import {ProjectenFirebaseServiceService} from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projecten-list',
  templateUrl: 'projecten-list.component.html',
  styleUrls: ['projecten-list.component.css'],
  providers: [ProjectenFirebaseServiceService]
})
export class ProjectenListComponent implements OnInit {
  public authBackendUid: string;
  projecten : Array<IProject> = []
  project: IProject;
  errorMessage: string;

  constructor(private projectService : ProjectenFirebaseServiceService, private router:Router) { }

  ngOnInit() {
    this.authBackendUid = this.projectService.getAuthBackendUid();
    console.log("prj-list authBackendUid: " + this.authBackendUid) //DEBUG

    this.projectService.getProjects().subscribe(res => this.projecten = res)
  }

  getProject(id: string) {
    this.projectService.getProject(id).subscribe(
      project => this.project = project,
      error => this.errorMessage = <any>error
    );
  }

  archiveProject(id: string){
    this.getProject(id);
    this.project.archived =true;
    this.projectService.updateProject(this.project);
  }
}
