import React from 'react'
import ToBuyList from './src/screens/ToBuyList'
import { Provider } from 'react-redux'
import { Store } from './Store'

const App = () => {
  return (
    <Provider store={Store}>
      <ToBuyList></ToBuyList>
    </Provider>
  )
}

export default App