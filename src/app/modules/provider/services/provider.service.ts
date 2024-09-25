import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../models/provider.model';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private httpClient: HttpClient) {}

  // Method to get all providers
  getProviders(): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(`${environment.baseUrl}admin/provider`);
  }

  // Method to toggle provider activation status
  toggleProviderActivation(providerId: number, activate: boolean): Observable<any> {
    const url = `${environment.baseUrl}admin/provider/changestatus/${providerId}`;
    return this.httpClient.put(url, {});
  }

  // Method to get provider invoices
  getProviderInvoices(providerId: number): Observable<any> {
    const url = `${environment.baseUrl}admin/provider/${providerId}/invoices`;
    return this.httpClient.get(url);
  }

  // Method to get provider's properties (if applicable)
  getProviderProperties(providerId: number): Observable<any> {
    const url = `${environment.baseUrl}admin/provider/${providerId}/properties`;
    return this.httpClient.get(url);
  }
}