
import { Injectable } from '@angular/core';
import { Conductor } from '../../conductor/conductor';

import { Router } from '@angular/router';
import { Observable, identity } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  conductorList: AngularFireList<any>
  constructor(private db:AngularFireDatabase ,private fire:AngularFireAuth , private router: Router) { 
    this.conductorList = db.list('conductors')
  }

  createConductor(conductor: Conductor) {
    
            this.conductorList.push({
            phone: conductor.phone ,
            firstname: conductor.firstname ,
            lastname: conductor.lastname ,
            address: conductor.address
            
    }).catch(error=>{
      console.error(error)
     
    })
    
  }


  getConductors() : Observable<any>{
    return this.db.list('conductors').snapshotChanges();
    }
   
    getFirstConductor() : Observable<any>{
      return this.db.list('conductors', ref1 => ref1.limitToFirst(1)).snapshotChanges();
      }
     

    getNotifications() : Observable<any>{
      return this.db.list('historique/-MGtdM4rszb3TUUMgzDT').snapshotChanges();
      
    //  return this.db.list('historique', ref => ref.limitToFirst(1)).valueChanges();
   // return this.db.list('historique', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
     
      }
    getConductorById(id) : Observable<any>{
      return this.db.list('conductors', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
    }
  
   
  }


