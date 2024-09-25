import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Traveler } from '../models/traveler.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  constructor(private http: HttpClient) { }

  getTravelers(): Observable<Traveler[]> {
    return this.http.get<Traveler[]>(`${environment.baseUrl}admin/traveler`);
  }

  toggleTravelerActivation(travelerId: number, activate: boolean): Observable<any> {
    return this.http.put(`${environment.baseUrl}admin/traveler/changestatus/${travelerId}`,{});
  }
}
