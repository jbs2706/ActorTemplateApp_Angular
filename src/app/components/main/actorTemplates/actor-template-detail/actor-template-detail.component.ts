import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProjectenFirebaseServiceService } from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";
import {IActorTemplate} from "../../../../model/actorTemplate";
import {IPerson} from "../../../../model/person";

@Component({
  selector: 'app-actor-template-detail',
  templateUrl: './actor-template-detail.component.html',
  styleUrls: ['./actor-template-detail.component.css'],
  providers: [ProjectenFirebaseServiceService]
})
export class ActorTemplateDetailComponent implements OnInit {
  errorMessage: string;
  private sub: Subscription;
  project: IProject;
  actorTemplates : Array<IActorTemplate> = []
  actorTemplate : IActorTemplate;
  persons : Array<IPerson> = []

  constructor(private _route: ActivatedRoute,
              private _projectenService: ProjectenFirebaseServiceService) {
    console.log("ad id: " + this._route.snapshot.params['id']);
    console.log("ad id2: " + this._route.snapshot.params['id2']);
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id1 = params['id'];
        let id2 = params['id2'];
        this.getProject(id1);
        this.getActorTemplate(id2)
      });
    this._projectenService.getActorTemplates().subscribe(res => this.actorTemplates = res);
    this._projectenService.getPersons().subscribe(res => this.persons = res);
  }

  getProject(id: string) {
    this._projectenService.getProject(id).subscribe(
      project => this.project = project,
      error => this.errorMessage = <any>error
    );
  }

  getActorTemplate(id: string) {
    this._projectenService.getTemplate(id).subscribe(
      atObj => this.actorTemplate = atObj,
      error => this.errorMessage = <any>error
    );
  }

  getImage(data: string) {
    return 'data:image/jpeg;base64,' + data;
  }
}
