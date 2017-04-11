// Import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { MainComponent } from './components/main/main.component';
import { GoogleLoginComponent } from './components/authentication/google-login/google-login.component';
import { HomeComponent } from './components/main/home/home.component';
import { AppComponent } from './app.component';
import { ProjectenListComponent } from './components/main/projecten/projecten-list/projecten-list.component';
import { ProjectDetailComponent } from './components/main/projecten/project-detail/project-detail.component';
import { ProjectFormComponent } from './components/main/projecten/project-form/project-form.component';
import { ActorTemplateDetailComponent } from './components/main/actorTemplates/actor-template-detail/actor-template-detail.component';
import { ActorTemplateFormComponent } from './components/main/actorTemplates/actor-template-form/actor-template-form.component';
import { PersonFormComponent } from './components/main/personen/person-form/person-form.component';
import { ProjectArchiefComponent } from './components/main/projecten/project-archief/project-archief.component';

// Import pipes, service & providers
import {ProjectenFirebaseServiceService} from "./services/projectenFirebaseService/projecten-firebase-service.service";
import { AuthService } from './providers/auth.service';
import { Base64PrefixPipe } from './pipes/base64Prefix.pipe';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCizkJoLS9tz4c_qV4fbJb1_iMnCPE5ZCs',
  authDomain: 'actortemplateapp-a2713.firebaseapp.com',
  databaseURL: 'https://actortemplateapp-a2713.firebaseio.com',
  projectId: "actortemplateapp-a2713",
  storageBucket: 'actortemplateapp-a2713.appspot.com',
  messagingSenderId: '237314027784'
};

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: GoogleLoginComponent },
  { path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'projectForm', component: ProjectFormComponent },
      { path: 'projectenList', component: ProjectenListComponent },
      { path: 'projectenArchief', component: ProjectArchiefComponent },
      { path: 'projectDetail/:id', component: ProjectDetailComponent },
      { path: 'actorDetail/:id/:id2',component: ActorTemplateDetailComponent },
      { path: 'actorForm/:id',component: ActorTemplateFormComponent },
      { path: 'personForm/:id/:id2',component: PersonFormComponent }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MainComponent,
    GoogleLoginComponent,
    HomeComponent,
    AppComponent,
    ProjectenListComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
    ActorTemplateDetailComponent,
    ActorTemplateFormComponent,
    Base64PrefixPipe,
    PersonFormComponent,
    ProjectArchiefComponent
  ],
  providers: [AuthService, ProjectenFirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
