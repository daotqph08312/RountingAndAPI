import { Component, OnInit } from '@angular/core';
import {HotelServiceService} from '../hotel-service.service'

@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.component.html',
  styleUrls: ['./hotel-component.component.css']
})
export class HotelComponentComponent implements OnInit {

  constructor(private hotelService: HotelServiceService) { }
   hotels = [];
  ngOnInit() {
     this.hotelService.getListHotel().subscribe(data => {
      console.log(data);
      this.hotels = data;
    });
  }

}