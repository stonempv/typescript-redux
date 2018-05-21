import { AuthActions } from './auth'
import { DashActions } from './dashboard'
import { PaymentActions } from './payment'
import { ReferralActions } from './referrals'
import { ReferrerActions } from './referrer'

export type RootActions = AuthActions | DashActions | PaymentActions | ReferralActions | ReferrerActions


