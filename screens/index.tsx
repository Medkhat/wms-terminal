import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useAppSelector } from '../utils/hooks'
import AuthScreen from './Auth'
import { MenuListScreen } from './Menu'
import Scanner from './Scanner'
import { ScreenNames } from './types'

const Stack = createStackNavigator()

export const MainStack: React.FC = () => {
  const screenTitle = useAppSelector(state => state.menu.screenTitle)
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen
        name={ScreenNames.Home}
        component={MenuListScreen}
        options={{ title: 'Главное меню' }}
      />
      <Stack.Screen
        name={ScreenNames.SubMenu}
        component={MenuListScreen}
        options={{ title: screenTitle }}
      />
      <Stack.Screen
        name={ScreenNames.Scanner}
        component={Scanner}
        options={{ title: 'Сканировать' }}
      />
    </Stack.Navigator>
  )
}

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Auth}
        component={AuthScreen}
        options={{ header: () => undefined }}
      />
    </Stack.Navigator>
  )
}
