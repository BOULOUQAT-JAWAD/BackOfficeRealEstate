import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderInvoicesComponent } from './provider-invoices.component';

describe('ProviderInvoicesComponent', () => {
  let component: ProviderInvoicesComponent;
  let fixture: ComponentFixture<ProviderInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderInvoicesComponent]
    });
    fixture = TestBed.createComponent(ProviderInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
