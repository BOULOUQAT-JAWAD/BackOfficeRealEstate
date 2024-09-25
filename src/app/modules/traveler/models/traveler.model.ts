export interface Traveler {
    travelerId: number;
    email: string;
    activated: boolean;
    firstName: string;
    lastName: string;
    gender?: string | null;
    phoneNumber: string;
    subscriptionTravelers?: any;  // Change type according to your needs
    reservations?: Reservation[];
  }
  
  export interface Reservation {
    reservationId: number;
    propertyId: number;
    travelerId: number | null;
    checkinDate: string;
    checkoutDate: string;
    status: string;
    price: number;
    reservationServices: ReservationService[];
  }
  
  export interface ReservationService {
    providerId: number | null;
    reservationId: number;
    pjService: PjService;
    date: string;
    rating: number | null;
    gain: number;
    status: string;
    stripePaymentId: string;
    invoiceId: number;
  }
  
  export interface PjService {
    pjServiceId: number;
    title: string;
    description: string;
    price: number;
    pjServiceType: string;
  }
  