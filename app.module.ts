import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CreateConductorComponent } from './conductor/create-conductor/create-conductor.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ListeConductorComponent } from './conductor/list-conductors/liste-conductor.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from 'angular-bootstrap-md';
import {MatButtonModule} from '@angular/material/button';
import { EditConductorComponent } from './conductor/edit-conductor/edit-conductor.component';
import { LoginComponent } from './login/login.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConductorDetailsComponent } from './conductor/conductor-details/conductor-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateConductorComponent,
    ListeConductorComponent,
    ConfirmationDialogComponent,
    EditConductorComponent,
    LoginComponent,
    DashboardComponent,
    ConductorDetailsComponent

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    IconsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule , 
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    MatBadgeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
