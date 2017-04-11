import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ProjectenFirebaseServiceService} from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";
import {IActorTemplate} from "../../../../model/actorTemplate";
import {IPerson} from "../../../../model/person";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectenFirebaseServiceService]
})

export class ProjectDetailComponent implements OnInit {
  project: IProject;
  errorMessage: string;
  private sub: Subscription;
  actorTemplates : Array<IActorTemplate> = [];
  persons : Array<IPerson> = [];
  public authBackendUid: string;

  constructor(private _route: ActivatedRoute, private _router: Router,
              private _projectenService: ProjectenFirebaseServiceService) {
    console.log(this._route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = params['id'];
        this.getProject(id);
      });

    this._projectenService.getActorTemplates().subscribe(res => this.actorTemplates = res);
    this._projectenService.getPersons().subscribe(res => this.persons = res);
    this.authBackendUid = this._projectenService.getAuthBackendUid();
    console.log("prj-detail authBackendUid: " + this.authBackendUid) //DEBUG
  }

  getProject(id: string) {
    this._projectenService.getProject(id).subscribe(
      project => this.project = project,
      error => this.errorMessage = <any>error
    );
  }

  getImage(data: string) {
    return 'data:image/jpeg;base64,' + data;
  }

}
