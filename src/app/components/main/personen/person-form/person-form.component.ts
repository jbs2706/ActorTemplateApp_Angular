import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ProjectenFirebaseServiceService} from "../../../../services/projectenFirebaseService/projecten-firebase-service.service";
import {IProject} from "../../../../model/project";
import {IActorTemplate} from "../../../../model/actorTemplate";
import {IPerson} from "../../../../model/person";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  project: IProject;
  actorTemplates : Array<IActorTemplate> = []
  actorTemplate : IActorTemplate;
  errorMessage: string;
  private sub: Subscription;
  person : IPerson = null;
  public authBackendUid: string;
  private base64textString:String="";

  constructor(private _route: ActivatedRoute,
              private _projectenService: ProjectenFirebaseServiceService) {
    console.log("id: " + this._route.snapshot.params['id']);
    console.log("id2: " + this._route.snapshot.params['id2']);
    this.initPerson();
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
    this.authBackendUid = this._projectenService.getAuthBackendUid()
  }

  getActorTemplate(id: string) {
    this._projectenService.getTemplate(id).subscribe(
      atObj => this.actorTemplate = atObj,
      error => this.errorMessage = <any>error
    );
  }

  getProject(id: string) {
    this._projectenService.getProject(id).subscribe(
      project => this.project = project,
      error => this.errorMessage = <any>error
    );
  }

  initPerson(){
    this.person = {actorKey: "" , analist: "", archived: false, email: "", function: "", name: "", notes: "", phonenumber: null, photo: ""}
  }

  public newPerson() {
    this.person.analist = this.authBackendUid;
    this.person.actorKey = this.actorTemplate.$key;
    this._projectenService.savePerson(this.person);
    console.log("DEBUGG:  " +
      ", email: " + this.person.email +
      ", function: " + this.person.function +
      ", name: " + this.person.name +
      ", notes: " + this.person.notes +
      ", key: " + this.person.$key +
      ", analist: " + this.person.analist +
      ", archived: " + this.person.archived +
      ", actorKey: " + this.person.actorKey +
      ", photo: " + this.person.photo);

    this.initPerson();
  }

}
