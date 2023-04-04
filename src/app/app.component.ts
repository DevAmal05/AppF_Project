import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
 
  
  title = 'vigilance';
  constructor() {
        
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ1zZM--q8PM25Id8gNIZ6Lbv34fa-Q0w",
  authDomain: "vigilance-fd21d.firebaseapp.com",
  databaseURL: "https://vigilance-fd21d.firebaseio.com",
  projectId: "vigilance-fd21d",
  storageBucket: "vigilance-fd21d.appspot.com",
  messagingSenderId: "1029290956364",
  appId: "1:1029290956364:web:f21ad0642700df8595c6e9",
  measurementId: "G-G71E28GRZ2"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
   }
}