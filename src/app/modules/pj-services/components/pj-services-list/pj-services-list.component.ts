import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PjService } from '../../models/pj-service';
import { PjServicesService } from '../../services/pj-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomSnackBarService } from 'src/app/shared/custom-snack-bar/custom-snack-bar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pj-services-list',
  templateUrl: './pj-services-list.component.html',
  styleUrls: ['./pj-services-list.component.scss']
})
export class PjServicesListComponent implements OnInit, OnChanges {

  pjServices: PjService[] = [];
  searchId!: number;
  loading = false;
  error = false;

  constructor(private route: ActivatedRoute, private router: Router, private pjServicesService: PjServicesService, private customSnackBar: CustomSnackBarService) { }

  goToAddPropertyForm() {
    this.router.navigate(['admin/service/add']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    this.fetchAllPjServices();
  }

  fetchAllPjServices() {
    this.loading = true;
    this.error = false;
    this.pjServicesService.getAllPjServices().subscribe(
      (response) => {
        this.pjServices = response;
        this.loading = false;
        if (this.pjServices.length === 0) {
          this.customSnackBar.show('Aucune services trouvée.', 'info', 'blue');
        }
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.loading = false;
        this.error = true;
        this.customSnackBar.show('Erreur lors de la récupération des services. Veuillez réessayer plus tard.', 'error', 'red');
      }
    );
  }

  retryFetchingProperties() {
    this.fetchAllPjServices();
  }

  onShow(pjService: PjService): void {
    console.log('Show clicked for:', pjService);
    this.router.navigate(['/admin/services', pjService.pjServiceId]);
  }

  onEdit(pjService: PjService): void {
    this.router.navigate(['/admin/service/edit', pjService.pjServiceId]);
  }
  
  searchById(): void {
    if (this.searchId) {
      this.pjServicesService.getPjService(this.searchId).subscribe(
        (response: PjService) => {
          this.pjServices = [response];
          this.error = false;
        },
        (error: HttpErrorResponse) => {
          console.error(error);
          this.pjServices = [];
        }
      );
    } else {
      this.fetchAllPjServices();
    }
  }
}