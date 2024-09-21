import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjServiceFormComponent } from './pj-service-form.component';

describe('PjServiceFormComponent', () => {
  let component: PjServiceFormComponent;
  let fixture: ComponentFixture<PjServiceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PjServiceFormComponent]
    });
    fixture = TestBed.createComponent(PjServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
