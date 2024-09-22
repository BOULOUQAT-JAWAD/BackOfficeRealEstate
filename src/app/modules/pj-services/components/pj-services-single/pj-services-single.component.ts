import { Component, OnInit } from '@angular/core';
import { PjService } from '../../models/pj-service';
import { ActivatedRoute } from '@angular/router';
import { PjServicesService } from '../../services/pj-services.service';
import { CustomSnackBarService } from 'src/app/shared/custom-snack-bar/custom-snack-bar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pj-services-single',
  templateUrl: './pj-services-single.component.html',
  styleUrls: ['./pj-services-single.component.scss']
})
export class PjServicesSingleComponent implements OnInit {

  private pjServiceId: number | null;
  pjService!: PjService;
  pjServiceFetched!: boolean;

  constructor(private activeRoute: ActivatedRoute, private pjServicesService: PjServicesService, private customSnackBar: CustomSnackBarService,
  ) {
    this.pjServiceId = parseInt(activeRoute.snapshot.paramMap.get("id") || '');
    console.log(this.pjServiceId)
  }

  ngOnInit(): void {
    this.fetchProperty()
  }

  fetchProperty() {
    this.pjServiceFetched = false;
    this.pjServicesService.getPjService(this.pjServiceId!).subscribe(
      (response) => {
        this.pjService = response;
        this.pjServiceFetched = true;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        this.pjServiceFetched = true;
        this.customSnackBar.show('Erreur lors de la récupération de ce service, veuillez réessayer plus tard', 'error', 'red');
      }
    )
  }
}
