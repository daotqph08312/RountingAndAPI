import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HotelComponentComponent } from './hotel-component/hotel-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelServiceService } from './hotel-service.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFromComponent } from './hotel-from/hotel-from.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component : HotelComponentComponent},
      {path: 'detail-hotel/:id', component: HotelDetailComponent},
      {path: 'add-hotel', component: HotelFromComponent}
      
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HotelComponentComponent, HotelDetailComponent, HotelFromComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelServiceService]
})
export class AppModule { }
