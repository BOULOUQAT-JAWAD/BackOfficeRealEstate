import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ClientResponse } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<ClientResponse[]> {
    return this.httpClient.get<ClientResponse[]>(`${environment.baseUrl}admin/client`);
  }


  toggleClientActivation(clientId: number, activate: boolean): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}admin/client/changestatus/${clientId}`,{});
  }

  getClientProperties(clientId: number): Observable<any> {
    return this.httpClient.get("url");
  }
}
