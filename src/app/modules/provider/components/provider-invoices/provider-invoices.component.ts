import { Component, OnInit } from '@angular/core';
import { Provider, ProviderInvoice } from '../../models/provider.model';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-provider-invoices',
  templateUrl: './provider-invoices.component.html',
  styleUrls: ['./provider-invoices.component.scss']
})
export class ProviderInvoicesComponent implements OnInit{
  providerId!: number;
  invoices: ProviderInvoice[] = [];

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService
  ) {}

  ngOnInit(): void {
    // Get providerId from the route
    this.providerId = +this.route.snapshot.paramMap.get('id')!;

    // Fetch all providers and find the one with the matching providerId
    this.providerService.getProviders().subscribe(
      (providers: Provider[]) => {
        const selectedProvider = providers.find(provider => provider.providerId === this.providerId);
        if (selectedProvider) {
          this.invoices = selectedProvider.providerInvoices;  // Get the invoices for the selected provider
        }
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );
  }
}
