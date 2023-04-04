import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/services/conductor/conductor.service';
import { Conductor } from '../conductor';

@Component({
  selector: 'app-conductor-details',
  templateUrl: './conductor-details.component.html',
  styleUrls: ['./conductor-details.component.scss']
})
export class ConductorDetailsComponent implements OnInit {

  nbnotification ;
  conductorDetails = [];
  constructor(private conductorsservice: ConductorService) { }

  ngOnInit(): void {
    
    this.conductorsservice.getFirstConductor().subscribe((infos) => {
        
      this.getConductorDetails(infos)
   
      
    })

   
    this.conductorsservice.getNotifications().subscribe((results) => {
        
      this.NBnotif(results)
      
    })
    
  
  }

 

  NBnotif(entries){
   
    this.nbnotification = 0;
  
    entries.forEach(element => {
       
       
      this.nbnotification = this.nbnotification + 1 ;
    
  })
  console.log(this.nbnotification);
  }



  getConductorDetails(infos){
    this.conductorDetails = [];
    infos.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.conductorDetails.push(y as Conductor);
     
   })
   console.log(this.conductorDetails)
  }
  

}
