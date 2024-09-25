export interface SubscriptionClient {
    subscriptionClientId: string;
    annualPrice: number;
    subsDate: string;
    endSubsDate: string;
    isClientSubscribed: boolean;
  }
  
  export interface ClientResponse {
    clientId: number;
    email: string;
    activated: boolean;
    firstName: string;
    lastName: string;
    gender: string | null;
    phoneNumber: string;
    subscriptionClients: SubscriptionClient[];
    clientSubscribed: boolean;
  }
  