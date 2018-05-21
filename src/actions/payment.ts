import { Action } from 'redux'

export enum Payment {
  UPDATE_PAYMENT_REQUEST = 'UPDATE_PAYMENT_REQUEST',
  UPDATE_PAYMENT_SUCCESS = 'UPDATE_PAYMENT_SUCCESS',
  UPDATE_PAYMENT_FAILURE = 'UPDATE_PAYMENT_FAILURE',
}

export interface UpdatePaymentRequestAction extends Action {
  type: Payment.UPDATE_PAYMENT_REQUEST
  payload: {
    payment: string //TODO: Update to use interface
  }
}

export interface UpdatePaymentSuccessAction extends Action {
  type: Payment.UPDATE_PAYMENT_SUCCESS
}

export interface UpdatePaymentFailureAction extends Action {
  type: Payment.UPDATE_PAYMENT_FAILURE
  payload: {
    message: string
  }
}

export type PaymentActions = 
  UpdatePaymentRequestAction | 
  UpdatePaymentSuccessAction |
  UpdatePaymentFailureAction

  export const updatePayment = (
    payment: string
  ):UpdatePaymentRequestAction => {
    return (
      {
        type: Payment.UPDATE_PAYMENT_REQUEST,
        payload: {
          payment
        }
      }
    )
  }

  export const updatePaymentSuccess = ():UpdatePaymentSuccessAction => {
    return({
      type: Payment.UPDATE_PAYMENT_SUCCESS
    })
  }

  export const updatePaymentFailure = (
    message: string
  ):UpdatePaymentFailureAction => {
    return({
      type: Payment.UPDATE_PAYMENT_FAILURE,
      payload: {
        message
      }
    })
  }

