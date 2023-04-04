import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ConductorService } from 'src/app/services/conductor/conductor.service';
import { Conductor } from '../conductor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-conductor',
  templateUrl: './edit-conductor.component.html',
  styleUrls: ['./edit-conductor.component.scss']
})

export class EditConductorComponent implements OnInit {
  conductor = [];
  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
 
  firstname:string 
  lastname:string
  phone:string
  address:string
  condactor : Conductor
  conductordetails= []
  conductorforupdate: AngularFireList<any>
  data = {
    firstname : '' ,
    lastname :  '' ,
    
    phone :  '' ,
    address :  '' 
   } 
    id1: any;
  constructor(private router:Router,
    private firebase: AngularFireDatabase,private route: ActivatedRoute, private conductorservice: ConductorService) { 
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.conductorforupdate = this.firebase.list('conductors');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
  
    }
  
  ngOnInit(): void {

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
   
    this.conductorservice.getConductorById(this.id1).subscribe((results) => {
      
      this.getconductor(results)
    
    })
  }


  getconductor(entries){
   
    this.conductordetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.conductordetails.push(y as Conductor);

      this.data.firstname = this.conductordetails[0]['firstname'] 
      this.data.lastname = this.conductordetails[0]['lastname'] 
      this.data.phone = this.conductordetails[0]['phone'] 
      this.data.address = this.conductordetails[0]['address'] 
     
   })
   console.log("res");
   console.log(this.data.lastname);
   console.log(this.conductordetails);
   }
  onSubmit1() {
    
    let create = 'false';
    
     console.log(this.data.lastname);
     this.conductorforupdate.update(this.id1 , {
      firstname : this.data.firstname  ,
      lastname :  this.data.lastname ,
      address :  this.data.address ,
      phone :  this.data.phone
    }).then(added =>{




      
      this.router.navigate(['/listconductors'])
    
   

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
  
  

 
  }

}
