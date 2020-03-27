import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
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

  constructor() {}

  ngOnInit() {}
  SaveHotel(){
    let newhotel = {
      name: this.name.value,
      logo: this.logo.value,
      address: this.address.value,
      country: this.country.value
    }
    console.log(newhotel);
  }
}
