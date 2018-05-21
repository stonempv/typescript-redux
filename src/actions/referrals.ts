import { Action } from 'redux'
import { IReferral } from '../types';

export enum Referrals {
  REFERRAL_FETCH_REQUEST = 'REFERRAL_FETCH_REQUEST',
  REFERRAL_FETCH_SUCCESS = 'REFERRAL_FETCH_SUCCESS',
  REFERRAL_FETCH_FAILURE = 'REFERRAL_FETCH_FAILURE',
  ADD_REFERRAL_REQUEST = 'ADD_REFERRAL_REQUEST',
  ADD_REFERRAL_SUCCESS = 'ADD_REFERRAL_SUCCESS',
  ADD_REFERRAL_FAILURE = 'ADD_REFERRAL_FAILURE'
}

export interface ReferralFetchRequestAction extends Action {
  type: Referrals.REFERRAL_FETCH_REQUEST
}

export interface ReferralFetchSuccessAction extends Action {
  type: Referrals.REFERRAL_FETCH_SUCCESS
  payload: {
    referrals: ReadonlyArray<IReferral>
  }
}

export interface ReferralFetchFailureAction extends Action {
  type: Referrals.REFERRAL_FETCH_FAILURE
  payload: {
    message: string
  }
}

export interface AddReferralRequestAction extends Action {
  type: Referrals.ADD_REFERRAL_REQUEST
  payload: {
    referral: IReferral 
  }
}

export interface AddReferralSuccessAction extends Action {
  type: Referrals.ADD_REFERRAL_SUCCESS
  payload: {
    referral: IReferral 
  }
}

export interface AddReferralFailureAction extends Action {
  type: Referrals.ADD_REFERRAL_FAILURE
  payload: {
    message: string 
  }
}


export type ReferralActions = 
  ReferralFetchRequestAction |
  ReferralFetchSuccessAction |
  ReferralFetchFailureAction |
  AddReferralRequestAction |
  AddReferralSuccessAction | 
  AddReferralFailureAction

export const fetchReferrals = ():ReferralFetchRequestAction => {
  return (
    {type: Referrals.REFERRAL_FETCH_REQUEST}
  )
}

export const fetchReferralsSuccess = (referrals:ReadonlyArray<IReferral>):ReferralFetchSuccessAction => {
  return (
    {
      type: Referrals.REFERRAL_FETCH_SUCCESS,
      payload: {
        referrals
      }
    }
  )
}

export const fetchReferralsFailure = (message: string):ReferralFetchFailureAction => {
  return (
    {
      type: Referrals.REFERRAL_FETCH_FAILURE,
      payload: {
        message
      }
    }
  )
}

export const addReferral = (referral: IReferral): AddReferralRequestAction => {
  return (
    {
      type: Referrals.ADD_REFERRAL_REQUEST,
      payload: {
        referral
      }
    }
  )
}

export const addReferralSuccess = (referral: IReferral): AddReferralSuccessAction => {
  return (
    {
      type: Referrals.ADD_REFERRAL_SUCCESS,
      payload: {
        referral
      }
    }
  )
}

export const addReferralFailure = (message: string): AddReferralFailureAction => {
  return (
    {
      type: Referrals.ADD_REFERRAL_FAILURE,
      payload:{
        message
      }
    }
  )
}

