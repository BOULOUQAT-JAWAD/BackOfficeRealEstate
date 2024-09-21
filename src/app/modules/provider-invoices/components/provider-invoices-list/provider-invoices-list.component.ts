import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProviderInvoice, ProviderInvoiceStatus } from '../../models/provider-invoice';
import { Router } from '@angular/router';
import { CustomSnackBarService } from 'src/app/shared/custom-snack-bar/custom-snack-bar.service';
import { ProviderInvoiceService } from '../../services/provider-invoice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-provider-invoices-list',
  templateUrl: './provider-invoices-list.component.html',
  styleUrls: ['./provider-invoices-list.component.scss']
})
export class ProviderInvoicesListComponent implements OnInit, OnChanges {

  startDate: string | undefined;
  endDate: string | undefined;
  status: ProviderInvoiceStatus | null = null;
  invoiceType?: string;
  isDashBoardRoute = true;

  clientPropertiessServices: ProviderInvoice[] = [];

  public ProviderInvoiceStatusEnum = ProviderInvoiceStatus;

  loading = false;
  error = false;
  errorMessage?: string;

  constructor(private router: Router, private providerInvoiceService: ProviderInvoiceService, private customSnackBar: CustomSnackBarService) { }

  // checkIfIncomeRoute(): void {
  //   const url = this.router.url;
  //   this.isDashBoardRoute = url.includes('/admin/dashboard');
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    // this.checkIfIncomeRoute();
    const today = new Date();
    const nextDate = new Date();
    nextDate.setDate(today.getDate() + 30);

    this.startDate = today.toISOString().split('T')[0];
    this.endDate = nextDate.toISOString().split('T')[0];

    this.fetchInvoices();
  }

  fetchInvoices(): void {
    // if(this.isDashBoardRoute){
    //   if (this.validateDates()) {
    //     this.fetchPropertiesInvoices();
    //   }
    // }
    if (this.invoiceType == "properties") {
      this.fetchPropertiesInvoices();
    } else if (this.invoiceType == "reservations") {
      this.fetchReservationsInvoices();
    } else {
      this.fetchAllInvoices();
    }
  }

  clearFilter() {
    this.startDate = undefined;
    this.endDate = undefined;
    this.invoiceType = undefined;
    this.status = null;
  }

  validateDates(): boolean {
    if (!this.startDate || !this.endDate) {
      this.error = true;
      this.customSnackBar.show('Veuillez sélectionner les deux dates.', 'warning', 'yellow');
      return false;
    }

    if (new Date(this.endDate) < new Date(this.startDate)) {
      this.error = true;
      this.customSnackBar.show('La date de fin doit être postérieure à la date de début.', 'warning', 'yellow');
      return false;
    }

    return true;
  }

  fetchPropertiesInvoices() {
    this.loading = true;
    this.error = false;
    this.providerInvoiceService.getPropertiesServicesInvoice(this.startDate, this.endDate, this.status).subscribe(
      (response) => {
        this.clientPropertiessServices = response;
        this.loading = false;
        if (this.clientPropertiessServices.length === 0) {
          this.customSnackBar.show('Aucune facture de propriété trouvée.', 'info', 'blue');
          this.errorMessage = 'Aucune facture de propriété trouvée.';
        }
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.loading = false;
        this.error = true;
        this.customSnackBar.show('Erreur lors de la récupération des factures. Veuillez réessayer plus tard.', 'error', 'red');
        this.errorMessage = "Erreur lors de la récupération des factures. Veuillez réessayer plus tard.";
      }
    );
  }

  fetchReservationsInvoices() {
    this.loading = true;
    this.error = false;
    this.providerInvoiceService.getReservationsServicesInvoice(this.startDate, this.endDate, this.status).subscribe(
      (response) => {
        this.clientPropertiessServices = response;
        this.loading = false;
        if (this.clientPropertiessServices.length === 0) {
          this.customSnackBar.show('Aucune facture trouvée.', 'info', 'blue');
          this.errorMessage = "Aucune facture trouvée.";
        }
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.loading = false;
        this.error = true;
        this.customSnackBar.show('Erreur lors de la récupération des factures. Veuillez réessayer plus tard.', 'error', 'red');
        this.errorMessage = "Erreur lors de la récupération des factures. Veuillez réessayer plus tard.";
      }
    );
  }

  fetchAllInvoices() {
    this.loading = true;
    this.error = false;
    this.providerInvoiceService.getAllServicesInvoice(this.startDate, this.endDate, this.status).subscribe(
      (response) => {
        this.clientPropertiessServices = response;
        this.loading = false;
        if (this.clientPropertiessServices.length === 0) {
          this.customSnackBar.show('Aucune facture trouvée.', 'info', 'blue');
          this.errorMessage = "Aucune facture trouvée.";
        }
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.loading = false;
        this.error = true;
        this.customSnackBar.show('Erreur lors de la récupération des factures. Veuillez réessayer plus tard.', 'error', 'red');
        this.errorMessage = "Erreur lors de la récupération des factures. Veuillez réessayer plus tard.";
      }
    );
  }

  getTotalCharges(): number {
    const propertyCharges = this.clientPropertiessServices.reduce((sum, invoice) => sum + invoice.gain, 0);
    return propertyCharges;
  }
}