import { Component, OnInit } from '@angular/core';
import { ConducteurService } from 'src/app/conducteur/services/conducteur.service';
import { Conducteur } from './model/conducteur.model';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.css']
})
export class ConducteurComponent implements OnInit {
  conducteurs: Conducteur[];
  displayAdd: boolean = false;
  displayUpdate: boolean = false;
  newConducteur: Conducteur = new Conducteur();
  conducteurUpdate : Conducteur = new Conducteur();
  constructor(private conducteurService: ConducteurService) { }

  ngOnInit(): void {

    this.conducteurService.getConducteurs().subscribe(data => {
      this.conducteurs = data.map(e => {

        console.log(e.payload.doc.data());
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Conducteur;

      })
    });

    
  }

    showAddDialog() {
        this.displayAdd = true;
    }

    showUpdateDialog(conducteurToUpdate: Conducteur) {
      this.displayUpdate = true;

      this.conducteurUpdate = conducteurToUpdate;
  }
    

  createConducteur(){
    this.newConducteur.id = null;

      this.conducteurService.createConducteur(this.newConducteur);
      this.displayAdd = false;
  }

  updateConducteur(conducteur: Conducteur){
    this.conducteurService.updateConducteur(conducteur);
    this.displayUpdate = false;
  }

  deleteConducteur(conducteurId: string){
    this.conducteurService.deleteConducteur(conducteurId);
  }

}
