import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModel ,FormsModule} from '@angular/forms'; 


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackComponentComponent } from '../app/components/track-component/track-component.component';
import { NewplaylistComponent } from './components/newplaylist/newplaylist.component';
// import { AddTrackComponent } from '../app/components/add-track/add-track.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const appRoutes: Routes = [
  {
    path: 'https://accounts.spotify.com/authorize?client_id=b72324b7926347dc83e63ae5d04366f4&response_type=code&redirect_uri=http://localhost:4200/callback&state=sdsfca&scope=user-read-private%20user-read-email', 
    component: NewplaylistComponent,
    data: {header: 'accessToken'}
  },{
  path: 'playlist',
  component: NewplaylistComponent
},{
  path: 'users',
  component: AdduserComponent
},{
  path: 'login',
  component: LoginComponent
},{
  path: '',
  component: LoginComponent
}


]

@NgModule({
  declarations: [
    AppComponent,
    TrackComponentComponent,
    NewplaylistComponent,
    // AddTrackComponent,
    AdduserComponent,
    LoginComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
