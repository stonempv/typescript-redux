import { createStore, applyMiddleware, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { rootEpic } from './epics'
import rootReducer, { RootState } from './reducers'

const configureStore = (initialState?: RootState) => {
  const middlewares:Middleware[] = [ createEpicMiddleware(rootEpic) ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return createStore(
    rootReducer, 
    initialState!,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  ) 
}

export default configureStore
