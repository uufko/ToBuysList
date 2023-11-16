import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store'
import ToBuyList from './src/screens/ToBuyList/ToBuyList'

const App = () => {
  return (
    <Provider store={Store}>
      <ToBuyList/>
    </Provider>
  )
}

export default App