import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ProjectenFirebaseServiceService} from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";
import {IActorTemplate} from "../../../../model/actorTemplate";
import {IPerson} from "../../../../model/person";

@Component({
  selector: 'app-actor-template-form',
  templateUrl: './actor-template-form.component.html',
  styleUrls: ['./actor-template-form.component.css']
})
export class ActorTemplateFormComponent implements OnInit {
  project: IProject;
  actorTemp: IActorTemplate = null;

  errorMessage: string;
  private sub: Subscription;
  persons : Array<IPerson> = [];
  public authBackendUid: string;


  constructor(private _route: ActivatedRoute, private _router: Router,
              private _projectenService: ProjectenFirebaseServiceService) {
    console.log(this._route.snapshot.params['id']);
    this.initTemplate();
  }


  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id1 = params['id'];
        this.getProject(id1);
      });
    this._projectenService.getPersons().subscribe(res => this.persons = res);
    this.authBackendUid = this._projectenService.getAuthBackendUid()
  }

  getProject(id: string) {
    this._projectenService.getProject(id).subscribe(
      project => this.project = project,
      error => this.errorMessage = <any>error
    );
  }

  initTemplate(){
    this.actorTemp = {analist: "" , archived: false, projectKey: "", rolename: "", taskdescription: ""}
  }

  public newTemplate() {
    this.actorTemp.analist = this.authBackendUid;
    this.actorTemp.projectKey = this.project.$key;
    //this._projectenService.saveActorTemplate(this.actorTemp);
    this.initTemplate();
  }

}
