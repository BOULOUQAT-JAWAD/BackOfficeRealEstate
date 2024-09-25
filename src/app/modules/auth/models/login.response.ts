export interface LoginResponse {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userId: string;
  token: string;
  role : Role
}

export enum Role {
  CLIENT = 'CLIENT',
  TRAVELER = 'TRAVELER',
  ADMIN = 'ADMIN',
  PROVIDER = 'PROVIDER'
}
