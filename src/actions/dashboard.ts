import { Action } from 'redux'

export enum Dashboard {
  SET_DASHBOARD='SET_DASHBOARD'
}

export interface SetDashboardAction extends Action {
  type: Dashboard.SET_DASHBOARD
}

export type DashActions = 
  SetDashboardAction

export const setDashboard = (): SetDashboardAction => {
  return (
    {
      type: Dashboard.SET_DASHBOARD
    }
  )
}


// export const gotoDashboard = (context) => (dispatch, getState) => {

//   dispatch({
//     type: 'SET_DASHBOARD'
//   })

//   context.push('/')

// }

