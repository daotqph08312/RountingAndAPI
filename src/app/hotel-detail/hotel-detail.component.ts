import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HotelServiceService} from '../hotel-service.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  hotelId = null;
  hotelDetail = null;
  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private hotelService: HotelServiceService
  ) { }

  ngOnInit() {
    this.hotelId = this.activateRoute.paramMap.subscribe(params => {
      this.hotelId = Number(params.get('id'));
      this.hotelService.getListHotelbyId(this.hotelId).subscribe(data => {
        console.log(data);
        this.hotelDetail = data;
      })
    });
  }

  removeHotel(){
    this.hotelService.removeHotelById(this.hotelDetail.id).subscribe(data => {
      this.route.navigate(['']);
    });
  }

}