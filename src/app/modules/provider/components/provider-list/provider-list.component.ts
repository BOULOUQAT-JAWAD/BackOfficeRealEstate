import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Provider } from '../../models/provider.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
  providers: Provider[] = [];
  hoveredService: any = null;

  constructor(private providerService: ProviderService,private router: Router) {}

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders(): void {
    this.providerService.getProviders().subscribe(
      (data: Provider[]) => {
        this.providers = data;
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );
  }

  toggleActivation(provider: Provider): void {
    const activate = !provider.activated;
    this.providerService.toggleProviderActivation(provider.providerId, activate).subscribe(
      () => {
        provider.activated = activate; 
      },
      (error) => {
        console.error('Error toggling activation:', error);
      }
    );
  }

  viewProviderInvoices(providerId: number): void {
    this.router.navigate([`/admin/providers/${providerId}/invoices`]);
  }

  showServiceDetails(provider: Provider): void {
    this.hoveredService = provider.pjService;
  }

  hideServiceDetails(): void {
    this.hoveredService = null;
  }
}