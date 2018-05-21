export interface ICredentials{
  AuthMethod: 'Cognito' | 'Facebook'
  secretKey: string
  accessKey: string
  sessionToken: string
}

export interface IReferral {
  firstName: string
  lastName: string
  email: string | null
  phone: string | null
  location: string
  status: Status
}

export interface IReferrer {
  firstName: string
  lastName: string
  email: string 
  phone: string 
  university: string
  marketingPreference: boolean
}

export enum Status {
  New = 'new',
  Assigned = 'assigned',
  Contacted = 'contacted',
  Application = 'application',
  Offer = 'offer',
  Accepted = 'accepted',
  Visa = 'visa',
  InCountry = 'inCountry',
  ClosedLost = 'closedLost'
}

