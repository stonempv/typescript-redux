import * as React from 'react'
// import { BrowserRouter as Router } from "react-router-dom"
// import { Provider } from 'react-redux'
import App from './App'

interface IRootProps {
  store: any,
}

const Root:React.SFC<IRootProps> = ({ store }) => (
  // <Provider >
  //   <Router>
      <App />
  //   </Router>
  // </Provider>
);

export default Root;