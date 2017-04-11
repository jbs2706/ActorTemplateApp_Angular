import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {IProject} from "../../model/project";
import {IActorTemplate} from "../../model/actorTemplate";
import {IPerson} from "../../model/person";
import {IUser} from "../../model/user";
import {IGoogleProfile} from "../../model/googleProfile";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProjectenFirebaseServiceService {

  projectenPATH = "/projects"
  actorenPATH = "/actors"
  personPATH = "/persons"
  userPATH = "/users"

  constructor(public af: AngularFire) { }

  // CRUD methoden
  getProjects() : Observable<IProject []>{
    const regObserver : Observable<IProject []> = this.af.database.list(this.projectenPATH)
    return regObserver;
  }

  getActorTemplates() : Observable<IActorTemplate []>{
    const regObserver : Observable<IActorTemplate []> = this.af.database.list(this.actorenPATH)
    return regObserver;
  }

  getPersons() : Observable<IPerson []>{
    const regObserver : Observable<IPerson []> = this.af.database.list(this.personPATH)
    return regObserver;
  }

  getUsers() : Observable<IUser []>{
    const regObserver : Observable<IUser []> = this.af.database.list(this.userPATH)
    return regObserver;
  }

  saveProject(projectObj : IProject){

    console.log("PUSH project to af:  " +
      ", title: " + projectObj.title +
      ", description: " + projectObj.description +
      ", project analist: " + projectObj.analist);

    this.af.database.list(this.projectenPATH).push(projectObj)
  }

  saveActorTemplate(templateObj : IActorTemplate){
    console.log("PUSH actor to af:  " +
      ", rollname: " + templateObj.rolename +
      ", actor description: " + templateObj.taskdescription +
      ", actor analist: " + templateObj.analist);
    this.af.database.list(this.actorenPATH).push(templateObj)
  }

  saveUser(userObj : IUser){

    console.log("PUSH user to af:  " +
      ", userId: " + userObj.userId +
      ", email: " + userObj.email +
      ", username: " + userObj.username +
      ", userrole: " + userObj.userrole);

    this.af.database.list(this.userPATH).push(userObj)
  }

  savePerson(personObj : IPerson){

    console.log("PUSH person to af:  " +
      ", email: " + personObj.email +
      ", function: " + personObj.function +
      ", name: " + personObj.name +
      ", notes: " + personObj.notes +
      ", phonenumber: " + personObj.phonenumber +
      ", photo: " + personObj.photo);


    this.af.database.list(this.personPATH).push(personObj)
  }

  removeProject(projectObj: IProject){
    this.af.database.list(this.projectenPATH).remove(projectObj.$key);
  }

  updateProject(projectObj: IProject){
    this.af.database.list(this.projectenPATH).update(projectObj.$key, {
      archived: true
    });
  }

  // Get specifieke waarden by id
  getProject(id: string): Observable<IProject> {
    return this.getProjects()
      .map((prjct: IProject[]) => prjct.find(project => project.$key === id))
      .do(data => console.log(data));
  }

  getTemplate(id: string): Observable<IActorTemplate> {
    return this.getActorTemplates()
      .map((at: IActorTemplate[]) => at.find(atObj => atObj.$key === id))
      .do(data => console.log(data));
  }

  getUser(id: string): Observable<IUser> {
    return this.getUsers()
      .map((usr: IUser[]) => usr.find(user => user.userId === id))
      .do(data => console.log(data));
  }

  // Auth methoden
  getAuthBackendUid(): string {
    let id: string;
    this.af.auth.subscribe( auth => id = auth.uid);
    return id;
  }

}
