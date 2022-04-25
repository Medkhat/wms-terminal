import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, RootState, store } from './redux/store'
import { AuthStack, MainStack } from './screens'

const App: React.FC = () => {
  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth)

  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default function () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}
