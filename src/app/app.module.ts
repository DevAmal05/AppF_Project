import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import {MatTooltipModule} from '@angular/material/tooltip';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConductorDetailsComponent } from './conductor/conductor-details/conductor-details.component';
import { AppareilComponent } from './appareil/appareil.component';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { VoitureComponent } from './voiture/voiture.component';
import { ConducteurComponent } from './conducteur/conducteur.component';
@NgModule({
  declarations: [
    AppComponent,
    
    CreateConductorComponent,
    ListeConductorComponent,
    ConfirmationDialogComponent,
    EditConductorComponent,
    DashboardComponent,
    ConductorDetailsComponent,
    AppareilComponent,
    HeaderComponent,
    VoitureComponent,
    ConducteurComponent

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule , 
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    MatBadgeModule,
    InputTextModule,
    CalendarModule,
    TableModule,
    TabViewModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
