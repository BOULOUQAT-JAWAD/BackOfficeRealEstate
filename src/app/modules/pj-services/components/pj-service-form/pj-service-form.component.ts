import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PjService, PjServiceType } from '../../models/pj-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PjServicesService } from '../../services/pj-services.service';

@Component({
  selector: 'app-pj-service-form',
  templateUrl: './pj-service-form.component.html',
  styleUrls: ['./pj-service-form.component.scss']
})
export class PjServiceFormComponent {

  pjServiceForm!: FormGroup;
  pjServiceId?: number;
  // selectedPjServices: PjService[] = [];

  pjServiceTypes = Object.values(PjServiceType);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private pjServicesService: PjServicesService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.checkEditMode();
  }

  checkEditMode(): void {
    const currentRoute = this.route.snapshot.routeConfig?.path;
    console.log('currentRoute : ' + currentRoute);

    if (currentRoute === 'service/edit/:id') {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        const id = Number(idParam);
        if (!isNaN(id)) {
          this.pjServiceId = id;
          this.loadPjService(id);
        } else {
          console.error('Invalid ID:', idParam);
        }
      }
    }
  }

  initializeForm(): void {
    this.pjServiceForm = this.fb.group({
      pjServiceId: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      pjServiceType: ['', Validators.required],
    });
  }

  loadPjService(id: number): void {
    this.pjServicesService.getPjService(id).subscribe((pjService: PjService) => {
      this.pjServiceForm.patchValue({
        pjServiceId: pjService.pjServiceId,
        title: pjService.title,
        description: pjService.description,
        price: pjService.price,
        pjServiceType: pjService.pjServiceType,
      });
    });
  }

  onSubmit(): void {
    if (this.pjServiceForm.valid) {
  
      const pjService: PjService = this.pjServiceForm.value;
  
      if (this.pjServiceId) {
        pjService.pjServiceId = this.pjServiceId;
        this.pjServicesService.saveOrUpdatePjService(pjService).subscribe(response => {
          console.log('pjService updated:', response);
          this.router.navigate(['/admin/services']);
        }, error => {
          console.error('Error updating property:', error);
        });
      } else {
        this.pjServicesService.saveOrUpdatePjService(pjService).subscribe(response => {
          console.log('pjService created:', response);
          this.router.navigate(['/admin/services']);
        }, error => {
          console.error('Error creating pjService:', error);
        });
      }
    } else {
      this.pjServiceForm.markAllAsTouched();
    }
  }
}
