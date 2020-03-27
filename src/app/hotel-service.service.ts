import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const hotelAPI = 'https://5e7863ef491e9700162ddfcf.mockapi.io/Hotel';
@Injectable()
export class HotelServiceService {

  constructor(
    private http: HttpClient
  ) { }
 getListHotel(): Observable<any>{
    return this.http.get<any>(hotelAPI);
  }
   getListHotelbyId(id): Observable<any>{
    let url = `${hotelAPI}/${id}`;
    return this.http.get<any>(url);
  }
  
  removeHotelById(id): Observable<any>{
    let url = `${hotelAPI}/${id}`;
    return this.http.delete<any>(url);
  }
  addNewHotel(object):Observable<any>{
    return this.http.post<any>(hotelAPI,object);
  }
}