export class Conductor{
    $key : string;
    lastname: string;
    firstname: string;
    phone:string;
    address: string;
    state: string;
    message: string;

   
    constructor(firstname: string, lastname: string, phone:string,
      address: string) {
       
      this.firstname = firstname;
      this.lastname = lastname;
      this.phone = phone;
      this.address = address;
     
  }
  
  }