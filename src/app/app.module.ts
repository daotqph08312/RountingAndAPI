import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HotelComponentComponent } from './hotel-component/hotel-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelServiceService } from './hotel-service.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path: '', component : HotelComponentComponent},
      {path: 'detail-hotel/:id', component: HotelDetailComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HotelComponentComponent, HotelDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelServiceService]
})
export class AppModule { }
