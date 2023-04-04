import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Conductor } from '../conductor';
import { ConductorService } from 'src/app/services/conductor/conductor.service';
@Component({
  selector: 'app-create-conductor',
  templateUrl: './create-conductor.component.html',
  styleUrls: ['./create-conductor.component.scss']
})
export class CreateConductorComponent implements OnInit {

  errorMessage1:string ='';
  errorMessage:string ='';
  formGroup: FormGroup;
 
  firstname:string 
  lastname:string
  phone:string
  address:string
  condactor : Conductor
  conductorList: AngularFireList<any>
  
  constructor(private conductorservice : ConductorService, public router:Router,
     private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      this.conductorList = db.list('conductors')
     }
  ngOnInit() {
  this.formGroup = new FormGroup({
   
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    Phone: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern(/^[0-9]/)
    ]),
    Address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
     
    ])
  });
 
}

onSubmit() {
 
  let create = 'false';
  
          this.conductorList.push({
        
          phone: this.phone ,
          firstname: this.firstname ,
          lastname: this.lastname ,
          address: this.address,
          message: ' ',
          state: '0'
         
        
            }).then(added =>{
              this.router.navigate(['/listconductors'])
            
           
      
  }).catch(error=>{
    console.error(error)
    this.errorMessage1= error.messaage
    console.log('error', error)
    console.log(error.message)
  })
  
 /*
  this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
 
  console.log(this.condactor)
  this.conductorservice.createConductor(this.condactor)
  */

}
}