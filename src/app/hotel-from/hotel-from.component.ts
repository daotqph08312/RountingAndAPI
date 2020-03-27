import { Component, OnInit } from "@angular/core";
import { FormControl,FormGroup } from "@angular/forms";
import {HotelServiceService} from '../hotel-service.service';
import {Router,ActivatedRoute} from "@angular/router"
@Component({
  selector: "app-hotel-from",
  templateUrl: "./hotel-from.component.html",
  styleUrls: ["./hotel-from.component.css"]
})
export class HotelFromComponent implements OnInit {
  NewHotel = new FormGroup(
    {
    id: new FormControl(null),
 name: new FormControl(""),
 logo: new FormControl(""),
 address: new FormControl(""),
country: new FormControl("")
  }
  );

  ;

  constructor(    private activateRoute: ActivatedRoute,
    private route: Router,
    private hotelService:HotelServiceService,){}
  ngOnInit( ) {
    
    this.activateRoute.paramMap.subscribe( params =>{
       let hotelId = params.get('id');  
       if(hotelId != null){
         this.hotelService.getListHotelbyId(hotelId).subscribe( value =>{
            console.log(value);
            this.NewHotel.setValue(value);
         });
       } 
    });
  }
  SaveHotel(){
    if(this.NewHotel.value.id != null){
 this.hotelService.updateHotel(this.NewHotel.value).subscribe(data =>{
     this.route.navigate(['']);
   });
    }else{
 this.hotelService.addNewHotel(this.NewHotel.value).subscribe(data =>{
     this.route.navigate(['']);
   });
    }
  
   
  }
}
