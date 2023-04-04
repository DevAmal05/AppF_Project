import { Injectable } from '@angular/core';
import { Conducteur } from '../model/conducteur.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireObject } from '@angular/fire/database'; 
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
  conducteurList: AngularFireList<any>
  
  constructor(private db:AngularFireDatabase ,private fire:AngularFireAuth , private router: Router) { 
    this.conducteurList = db.list('conducteurs')
  }

  
  createConducteur(conducteur: Conducteur) {
    
    this.conducteurList.push({
    Cin: conducteur.Cin ,
    Nom: conducteur.Nom ,
    Prenom: conducteur.Prenom ,
    Email: conducteur.Email ,
    Ntel: conducteur.Ntel ,
    DateNaissance: conducteur.DateNaissance ,
    TypePermis: conducteur.TypePermis ,
    DatePermis: conducteur.DatePermis 
  
    
}).catch(error=>{
console.error(error)

})

}


getConducteurs() : Observable<any>{
return this.db.list('conducteurs').snapshotChanges();
}


 
  
 //updateConducteur(conducteur: Conducteur){
  
 //this.firestore.doc('conducteurs/' + conducteur.Cin).update(conducteur);
//} 

  
  //deleteConducteur(conducteurId: string){
    //this.firestore.doc('conducteurs/' + conducteurId).delete();
//}

}
