import { Component, OnInit } from "@angular/core";
import { FormControl,FormGroup } from "@angular/forms";
import {HotelServiceService} from '../hotel-service.service';
@Component({
  selector: "app-hotel-from",
  templateUrl: "./hotel-from.component.html",
  styleUrls: ["./hotel-from.component.css"]
})
export class HotelFromComponent implements OnInit {
  NewHotel = new FormGroup({
 name: new FormControl(""),
 logo: new FormControl(""),
 address: new FormControl(""),
country: new FormControl("")
  });

  ;

  constructor( private hotelService:HotelServiceService) {}

  ngOnInit() {}
  SaveHotel(){

   this.hotelService.addNewHotel(this.NewHotel.value).subscribe(data =>{
     console.log(data);
   });
   
  }
}
