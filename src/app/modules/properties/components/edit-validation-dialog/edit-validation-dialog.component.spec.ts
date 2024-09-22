import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditValidationDialogComponent } from './edit-validation-dialog.component';

describe('EditValidationDialogComponent', () => {
  let component: EditValidationDialogComponent;
  let fixture: ComponentFixture<EditValidationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditValidationDialogComponent]
    });
    fixture = TestBed.createComponent(EditValidationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
