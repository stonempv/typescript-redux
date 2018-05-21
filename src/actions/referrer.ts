import { Action } from 'redux'
import { IReferrer } from '../types';

export enum Referrer {
  USER_FETCH_REQUEST = 'USER_FETCH_REQUEST',
  USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS',
  USER_FETCH_FAILURE = 'USER_FETCH_FAILURE',
  USER_CREATE_REQUEST = 'USER_CREATE_REQUEST',
  USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS',
  USER_CREATE_FAILURE = 'USER_CREATE_FAILURE'
}

export interface UserFetchRequestAction extends Action {
  type: Referrer.USER_FETCH_REQUEST
  payload: {
      userName: string
  }
}

export interface UserFetchSuccessAction extends Action {
  type: Referrer.USER_FETCH_SUCCESS
  payload: {
    referrer: IReferrer
  }
}

export interface UserFetchFailureAction extends Action {
  type: Referrer.USER_FETCH_FAILURE
  payload: {
    message: string
  }
}

export interface UserCreateRequestAction extends Action {
  type: Referrer.USER_CREATE_REQUEST
  payload: {
    referrer: IReferrer
  }
}

export interface UserCreateSuccessAction extends Action {
  type: Referrer.USER_CREATE_SUCCESS
  payload: {
    referrer: IReferrer 
  }
}

export interface UserCreateFailureAction extends Action {
  type: Referrer.USER_CREATE_FAILURE
  payload: {
    message: string 
  }
}


export type ReferrerActions = 
  UserFetchRequestAction |
  UserFetchSuccessAction |
  UserFetchFailureAction |
  UserCreateRequestAction |
  UserCreateSuccessAction |
  UserCreateFailureAction

export const fetchUser = (userName: string):UserFetchRequestAction => {
  return (
    {
      type: Referrer.USER_FETCH_REQUEST,
      payload:{
        userName
      }  
    }
  )
}

export const fetchUserSuccess = (referrer: IReferrer):UserFetchSuccessAction => {
  return (
    {
      type: Referrer.USER_FETCH_SUCCESS,
      payload:{
        referrer
      }  
    }
  )
}

export const fetchUserFailire = (message: string):UserFetchFailureAction => {
  return (
    {
      type: Referrer.USER_FETCH_FAILURE,
      payload:{
        message
      }  
    }
  )
}

export const createUser = (referrer: IReferrer):UserCreateRequestAction => {
  return (
    {
      type: Referrer.USER_CREATE_REQUEST,
      payload:{
        referrer
      }  
    }
  )
}

export const fetchCreateSuccess = (referrer: IReferrer):UserCreateSuccessAction => {
  return (
    {
      type: Referrer.USER_CREATE_SUCCESS,
      payload:{
        referrer
      }  
    }
  )
}

export const fetchCreateFailure = (message: string):UserCreateFailureAction => {
  return (
    {
      type: Referrer.USER_CREATE_FAILURE,
      payload:{
        message
      }  
    }
  )
}
