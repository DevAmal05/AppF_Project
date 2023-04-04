import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

//import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConductorService } from '../../services/conductor/conductor.service';
import { Conductor } from '../conductor';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-liste-conductor',
  templateUrl: './liste-conductor.component.html',
  styleUrls: ['./liste-conductor.component.scss']
})

export class ListeConductorComponent implements OnInit {

 // title = 'angular-confirmation-dialog';
  conductorfordelete : AngularFireList<any>; 
  listconductor = [];
  constructor( private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private conductorservice: ConductorService) { 
      this.conductorfordelete = this.firebase.list('conductors');
    }

  ngOnInit(): void {
    this.conductorservice.getConductors().subscribe((results) => {
      
      this.listConductor(results)
   
    })
  }


  listConductor(entries){
   
    this.listconductor = [];
  
    entries.forEach(element => {
       
       
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listconductor.push(y as Conductor);
    
  })
  console.log(this.listconductor);
  }

 openDialog(key): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.conductorfordelete.remove(key);
     
      }
    });
  }
 
  edit(key){
    
    this.router.navigate(['editconductor/'+key])
  
  }
}
