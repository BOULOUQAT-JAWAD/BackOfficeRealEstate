// src/app/models/provider.model.ts
export interface PJService {
    pjServiceId: number;
    title: string;
    description: string;
    price: number;
    pjServiceType: string;
  }
  
  export interface ProviderInvoice {
    providerInvoiceId: number;
    providerId: number | null;
    propertyId: number;
    reservationId: number | null;
    serviceType: string;
    date: string;
    rating: number | null;
    gain: number;
    status: string;
  }
  
  export interface Provider {
    providerId: number;
    email: string;
    activated: boolean;
    firstName: string;
    lastName: string;
    gender: string | null;
    phoneNumber: string;
    pjService: PJService;
    providerInvoices: ProviderInvoice[];
  }
  