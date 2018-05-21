import { Action } from 'redux'

export enum Auth {
  USER_REGISTER_REQUEST='USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS='USER_REGISTRATION_SUCCESS',
  USER_REGISTER_FAILURE='USER_REGISTRATION_FAILURE',
  COGNITO_LOGIN_REQUEST='COGNITO_LOGIN_REQUEST',
  COGNITO_LOGIN_SUCCESS='COGNITO_LOGIN_SUCCESS',
  COGNITO_LOGIN_FAILURE='COGNITO_LOGIN_FAILURE',
  COGNITO_REAUTH_REQUEST='COGNITO_REAUTH_REQUEST',
  COGNITO_REAUTH_SUCCESS='COGNITO_REAUTH_SUCCESS',
  COGNITO_REAUTH_FAILURE='COGNITO_REAUTH_FAILURE',
  COGNITO_LOGOUT_REQUEST='COGNITO_LOGOUT_REQUEST',
  COGNITO_LOGOUT_SUCCESS='COGNITO_LOGOUT_SUCCESS',
  COGNITO_LOGOUT_FAILURE='COGNITO_LOGOUT_FAILURE',
  FACEBOOK_LOGOUT_REQUEST='FACEBOOK_LOGOUT_REQUEST',
  FACEBOOK_LOGOUT_SUCCESS='FACEBOOK_LOGOUT_SUCCESS',
  FACEBOOK_LOGOUT_FAILURE='FACEBOOK_LOGOUT_FAILURE',
  COGNITO_SIGNUP_REQUEST='COGNITO_SIGNUP_REQUEST',
  COGNITO_SIGNUP_SUCCESS='COGNITO_SIGNUP_SUCCESS',
  COGNITO_SIGNUP_FAILURE='COGNITO_SIGNUP_FAILURE',
  SOCIAL_LOGIN_REQUEST='SOCIAL_LOGIN_REQUEST',
  SOCIAL_LOGIN_SUCCESS='SOCIAL_LOGIN_SUCCESS',
  SOCIAL_LOGIN_FAILURE='SOCIAL_LOGIN_FAILURE'
}


export interface UserRegisterRequestAction extends Action {
  type: Auth.USER_REGISTER_REQUEST
  payload: {
    userName: string
    fullName: string
    phone: string
    university: string
    marketing: boolean
  }
}

interface UserRegistrationSuccessAction extends Action { 
  type: Auth.USER_REGISTER_SUCCESS
  payload: {
    userName: string 
    response: string
  }
}

interface UserRegistrationFailureAction extends Action { 
  type: Auth.USER_REGISTER_FAILURE
  payload: {
    userName: string,
    message: string
  }
}

interface CognitoLoginRequestAction extends Action { 
  type: Auth.COGNITO_LOGIN_REQUEST
  payload: {
    userName: string,
    password: string
  }
}

interface CognitoLoginSuccessAction extends Action { 
  type: Auth.COGNITO_LOGIN_SUCCESS
  payload: {
    userName: string,
    secretKey: string
    accessKey: string
    sessionToken: string

  }
}

interface CognitoLoginFailureAction extends Action { 
  type: Auth.COGNITO_LOGIN_FAILURE
  payload: {
    userName: string,
    message: string
  }
}

interface CognitoReauthRequestAction extends Action {
  type: Auth.COGNITO_REAUTH_REQUEST
}

interface CognitoReauthSuccessAction extends Action {
  type: Auth.COGNITO_REAUTH_SUCCESS
  payload: {
    userName: string
    secretKey: string
    accessKey: string
    sessionToken: string
  }
}

interface CognitoReauthFailureAction extends Action {
  type: Auth.COGNITO_REAUTH_FAILURE
  payload: {
    message: string
  }
}

interface CognitoLogoutRequestAction extends Action {
  type: Auth.COGNITO_LOGOUT_REQUEST
}

interface CognitoLogoutSuccessAction extends Action {
  type: Auth.COGNITO_LOGOUT_SUCCESS
  payload: {
    response: string
  }
}

interface CognitoLogoutFailureAction extends Action {
  type: Auth.COGNITO_LOGOUT_FAILURE
  payload: {
    message: string
  }
}

interface FacebookLogoutRequestAction extends Action {
  type: Auth.FACEBOOK_LOGOUT_REQUEST
}

interface FacebookLogoutSuccessAction extends Action {
  type: Auth.FACEBOOK_LOGOUT_SUCCESS
  payload: {
    response: string
  }
}

interface FacebookLogoutFailureAction extends Action {
  type: Auth.FACEBOOK_LOGOUT_FAILURE
  payload: {
    message: string
  }
}

interface CognitoSignupRequestAction extends Action {
  type: Auth.COGNITO_SIGNUP_REQUEST
  payload: {
    userName: string
    email: string
    fullName: string
    phone: string
    university: string
    marketing: boolean
  }
}

interface CognitoSignupSuccessAction extends Action {
  type: Auth.COGNITO_SIGNUP_SUCCESS
  payload: {
    email: string
    response: string
  }
}

interface CognitoSignupFailureAction extends Action {
  type: Auth.COGNITO_SIGNUP_FAILURE
  payload: {
    email: string
    message: string
  }
}

interface SocialLoginRequestAction extends Action {
  type: Auth.SOCIAL_LOGIN_REQUEST
  payload: {
    email: string
    name: string
  }
}

interface SocialLoginSuccessAction extends Action {
  type: Auth.SOCIAL_LOGIN_SUCCESS
  payload: {
    email: string
    name: string
    secretKey: string
    accessKey: string
    sessionToken: string
  }
}

interface SocialLoginFailureAction extends Action {
  type: Auth.SOCIAL_LOGIN_FAILURE
  payload: {
    message: string
  }
}

export type AuthActions = 
  UserRegisterRequestAction | 
  UserRegistrationSuccessAction |
  UserRegistrationFailureAction |
  CognitoLoginRequestAction |
  CognitoLoginSuccessAction |
  CognitoLoginFailureAction |
  CognitoReauthRequestAction |
  CognitoReauthSuccessAction |
  CognitoReauthFailureAction |
  CognitoLogoutRequestAction |
  CognitoLogoutSuccessAction |
  CognitoLogoutFailureAction |
  FacebookLogoutRequestAction |
  FacebookLogoutSuccessAction |
  FacebookLogoutFailureAction |
  CognitoSignupRequestAction |
  CognitoSignupSuccessAction |
  CognitoSignupFailureAction |
  SocialLoginRequestAction |
  SocialLoginSuccessAction |
  SocialLoginFailureAction


export const registerUser = (
  userName: string,
  fullName: string,
  phone: string,
  university: string,
  marketing: boolean
):UserRegisterRequestAction => {
  return (
    {
      type: Auth.USER_REGISTER_REQUEST,
      payload: {
        userName,
        fullName,
        phone,
        university,
        marketing
      }
    }
  )
}

export const registerUserSuccess = (
  userName: string,
  response: string
):UserRegistrationSuccessAction => {
  return (
    {
      type: Auth.USER_REGISTER_SUCCESS,
      payload: {
        userName,
        response
      }
    }
  )
}

export const registerUserFailure = (
  userName: string,
  message: string
):UserRegistrationFailureAction => {
  return (
    {
      type: Auth.USER_REGISTER_FAILURE,
      payload: {
        userName,
        message
      }
    }
  )
}

export const loginCognito = (
  userName: string, 
  password: string
):CognitoLoginRequestAction => {
  return(
    {
      type: Auth.COGNITO_LOGIN_REQUEST,
      payload: {
        userName,
        password
      }
    }
  )
}

export const loginCognitoSuccess = (
  userName: string, 
  secretKey: string,
  accessKey: string,
  sessionToken: string,
):CognitoLoginSuccessAction => {
  return(
    {
      type: Auth.COGNITO_LOGIN_SUCCESS,
      payload: {
      userName,
      secretKey,
      accessKey,
      sessionToken
      }
    }
  )
}

export const loginCognitoFailure = (
  userName: string, 
  message: string
):CognitoLoginFailureAction => {
  return(
    {
      type: Auth.COGNITO_LOGIN_FAILURE,
      payload: {
        userName,
        message
      }
    }
  )
}

export const reauthCognito = (
  userName: string
):CognitoReauthRequestAction => {
  return(
    {
      type: Auth.COGNITO_REAUTH_REQUEST,
    }
  )
}

export const reauthCognitoSuccess = (
  userName: string,
  secretKey: string,
  accessKey: string,
  sessionToken: string,
):CognitoReauthSuccessAction => {
  return(
    {
      type: Auth.COGNITO_REAUTH_SUCCESS,
      payload: {
        userName,
        secretKey,
        accessKey,
        sessionToken
      }
    }
  )
}

export const reauthCognitoFailure = (
  message: string
):CognitoReauthFailureAction => {
  return(
    {
      type: Auth.COGNITO_REAUTH_FAILURE,
      payload: {
        message
      }
    }
  )
}

export const logoutCognito = (): CognitoLogoutRequestAction => {
  return({type: Auth.COGNITO_LOGOUT_REQUEST})
}

export const logoutCognitoSuccess = ( 
  response: string
): CognitoLogoutSuccessAction => {
  return(
    {
      type: Auth.COGNITO_LOGOUT_SUCCESS,
      payload:{
        response
      }
    }
  )
}

export const logoutCognitoFailure = (message: string): CognitoLogoutFailureAction => {
  return(
    {
      type: Auth.COGNITO_LOGOUT_FAILURE,
      payload: {
        message
      }
    }
  )
}

export const logoutFacebook = (): FacebookLogoutRequestAction => {
  return({type: Auth.FACEBOOK_LOGOUT_REQUEST})
}

export const logoutFacebookSuccess = (response: string): FacebookLogoutSuccessAction => {
  return(
    {
      type: Auth.FACEBOOK_LOGOUT_SUCCESS,
      payload: {
        response
      }
    }
  )
}

export const logoutFacebookFailure = (message: string): FacebookLogoutFailureAction => {
  return(
    {
      type: Auth.FACEBOOK_LOGOUT_FAILURE,
      payload: {
        message
      }
    }
  )
}

export const signupCognito = (
  userName: string,
  email: string,
  fullName: string,
  phone: string,
  university: string,
  marketing: boolean
): CognitoSignupRequestAction => {

  return(
    {
      type: Auth.COGNITO_SIGNUP_REQUEST,
      payload: {
        userName,
        email,
        fullName,
        phone,
        university,
        marketing
      }
    }
  )
}

export const signupCognitoSuccess = 
  (
    email: string, 
    response: string
  ): CognitoSignupSuccessAction => {
  return(
    {
      type: Auth.COGNITO_SIGNUP_SUCCESS,
      payload: {
        email,
        response
      }
    }
  )
}

export const signupCognitoFailure = 
  (
    email: string, 
    message: string
  ): CognitoSignupFailureAction => {
  return(
    {
      type: Auth.COGNITO_SIGNUP_FAILURE,
      payload: {
        email,
        message
      }
    }
  )
}

export const socialLogin = 
  (
    email: string, 
    name: string
  ): SocialLoginRequestAction => {
  return(
    {
      type: Auth.SOCIAL_LOGIN_REQUEST,
      payload: {
        email,
        name
      }
    }
  )
}

export const socialLoginSuccess = 
  (
    email: string, 
    name: string,
    secretKey: string,
    accessKey: string,
    sessionToken: string,
  ): SocialLoginSuccessAction => {
  return(
    {
      type: Auth.SOCIAL_LOGIN_SUCCESS,
      payload: {
        email,
        name,
        secretKey,
        accessKey,
        sessionToken
      }
    }
  )
}

export const socialLoginFailure = 
  (
    message: string
  ): SocialLoginFailureAction => {
  return(
    {
      type: Auth.SOCIAL_LOGIN_FAILURE,
      payload: {
        message
      }
    }
  )
}

