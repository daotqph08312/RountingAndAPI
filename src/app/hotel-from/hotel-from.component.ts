import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {HotelServiceService} from '../hotel-service.service';
@Component({
  selector: "app-hotel-from",
  templateUrl: "./hotel-from.component.html",
  styleUrls: ["./hotel-from.component.css"]
})
export class HotelFromComponent implements OnInit {
  name = new FormControl("");
  logo = new FormControl("");
  address = new FormControl("");
  country = new FormControl("");

  constructor( private hotelService:HotelServiceService) {}

  ngOnInit() {}
  SaveHotel(){
    let newhotel = {
      name: this.name.value,
      logo: this.logo.value,
      address: this.address.value,
      country: this.country.value
    }
   this.hotelService.addNewHotel(newhotel).subscribe(data =>{
     console.log(data);
   });
   
  }
}
