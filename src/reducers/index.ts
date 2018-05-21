
import { ICredentials } from '../types'
import { Auth } from '../actions/auth'
import { Dashboard } from '../actions/dashboard'
import { Payment } from '../actions/payment'
import { Referrals } from '../actions/referrals'
import { Referrer } from '../actions/referrer'
import { RootActions } from '../actions'
import { IReferral, IReferrer, Status } from '../types'



export interface RootState {
  auth: AuthState 
  dashboard: boolean
  referrals: ReferralState
  referrer: IReferrer | null
  errorMessage: string | null
  isLoading: boolean
}

export interface AuthState {
  isAuthenticating: boolean
  isLoggedIn: boolean
  credentials: ICredentials | null
}

export interface ReferralState {
  items: ReadonlyArray<IReferral>
  potentialValue: number
  confirmedValue: number
}

const initalAuthState: AuthState = {
  isAuthenticating: false,
  isLoggedIn: false,
  credentials: null
}


const initialReferralState:ReferralState  = {
  items: [],
  potentialValue: 0,
  confirmedValue: 0
}

const initialState: RootState = {
  auth: initalAuthState,
  dashboard: false,
  referrals: initialReferralState,
  referrer: null,
  errorMessage: null,
  isLoading: false
}

const rootReducer = (state: RootState, action: RootActions):RootState => {
  switch (action.type) {
    case Dashboard.SET_DASHBOARD:
      return {...state, dashboard: true}
 
    case Auth.COGNITO_LOGIN_FAILURE:
    case Auth.COGNITO_LOGOUT_FAILURE:
    case Auth.COGNITO_REAUTH_FAILURE:
    case Auth.COGNITO_SIGNUP_FAILURE:
    case Auth.FACEBOOK_LOGOUT_FAILURE:
    case Auth.SOCIAL_LOGIN_FAILURE:
    case Auth.USER_REGISTER_FAILURE:
    case Payment.UPDATE_PAYMENT_FAILURE:
    case Referrals.REFERRAL_FETCH_FAILURE:
    case Referrals.ADD_REFERRAL_FAILURE:
    case Referrer.USER_FETCH_FAILURE:
    case Referrer.USER_CREATE_FAILURE:
      return {...state, errorMessage: action.payload.message, isLoading: false}
  
    case Auth.COGNITO_LOGIN_REQUEST:
    case Auth.COGNITO_LOGOUT_REQUEST:
    case Auth.COGNITO_REAUTH_REQUEST:
    case Auth.COGNITO_SIGNUP_REQUEST:
    case Auth.FACEBOOK_LOGOUT_REQUEST:
    case Auth.SOCIAL_LOGIN_REQUEST:
    case Auth.USER_REGISTER_REQUEST:
    case Payment.UPDATE_PAYMENT_REQUEST:
    case Referrals.REFERRAL_FETCH_REQUEST:
    case Referrals.ADD_REFERRAL_REQUEST:
    case Referrer.USER_FETCH_REQUEST:
    case Referrer.USER_CREATE_REQUEST:
      return {...state, errorMessage: null, isLoading: true}

    case Auth.COGNITO_LOGIN_SUCCESS:
   
    case Auth.COGNITO_REAUTH_SUCCESS:
    case Auth.COGNITO_SIGNUP_SUCCESS:
    case Auth.SOCIAL_LOGIN_SUCCESS:
    case Auth.USER_REGISTER_SUCCESS:
    case Payment.UPDATE_PAYMENT_SUCCESS:
    case Referrals.REFERRAL_FETCH_SUCCESS:
    case Referrals.ADD_REFERRAL_SUCCESS:
      return {...state, isLoading: false}

    case Referrer.USER_FETCH_SUCCESS:
    case Referrer.USER_CREATE_SUCCESS:
      return {
        ...state, 
        isLoading: false,
        referrer: action.payload.referrer
      }

    case Auth.COGNITO_LOGOUT_SUCCESS:
    case Auth.FACEBOOK_LOGOUT_SUCCESS:
      return {
        ...state, 
        isLoading: false,
        referrer: null
      }
    default:
      return state
  } 
}

const authReducer = (auth: AuthState = initalAuthState, action: RootActions): AuthState => {
  switch (action.type) {
    case Auth.COGNITO_LOGIN_REQUEST:
    case Auth.COGNITO_REAUTH_REQUEST:
    case Auth.SOCIAL_LOGIN_REQUEST:
        return {
          ...auth,
          isLoggedIn: false,
          isAuthenticating: true
        }
    case Auth.COGNITO_LOGIN_SUCCESS:
    case Auth.COGNITO_REAUTH_SUCCESS:
      return {
        ...auth,
        isLoggedIn: true,
        isAuthenticating: false,
        credentials: {
          AuthMethod: 'Cognito',
          secretKey: action.payload.secretKey,
          accessKey: action.payload.accessKey,
          sessionToken: action.payload.sessionToken
        }
      };
    case Auth.SOCIAL_LOGIN_SUCCESS:
      return {
        ...auth,
        isLoggedIn: true,
        isAuthenticating: false,
        credentials: {
          AuthMethod: 'Facebook',
          secretKey: action.payload.secretKey,
          accessKey: action.payload.accessKey,
          sessionToken: action.payload.sessionToken
        }
      }
    case Auth.FACEBOOK_LOGOUT_SUCCESS:
    case Auth.COGNITO_LOGOUT_SUCCESS:
      return {
        ...auth, 
        isLoggedIn: false,
        isAuthenticating: false, 
        credentials: null
      }
    default:
      return auth;
    }
  }


  const referralReducer = (referrals: ReferralState = initialReferralState, action: RootActions): ReferralState => {
    switch (action.type) {
      case Referrals.REFERRAL_FETCH_SUCCESS:
        const notClosed = action.payload.referrals.filter((referral) => referral.status !== Status.ClosedLost )
        const complete = action.payload.referrals.filter((referral) => referral.status === Status.InCountry )
        return {
          ...referrals,
          potentialValue: notClosed.reduce((value, referral, index, notClosed) => {
              return value += 110
            }, 0),
          confirmedValue: complete.reduce((value, referral, index, complete) => {
              return value += 110
            }, 0),
          items: [...action.payload.referrals]
        }
      case Referrals.ADD_REFERRAL_SUCCESS:
        return {
          ...referrals,
          potentialValue: referrals.potentialValue + 110,
          items: [...referrals.items, action.payload.referral]
        }
      default:
        return referrals
    } 
  }

const reducer = (state:RootState, action:RootActions) => ({  
  ...rootReducer(state, action),
  auth: authReducer(state.auth, action),
  referralState: referralReducer(state.referrals, action)
})


export default reducer
