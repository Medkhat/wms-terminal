import { createStackNavigator } from '@react-navigation/stack'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { MenuListScreen } from './Menu'
import Scanner from './Scanner'
import { ScreenNames } from './types'

const Stack = createStackNavigator()

const MainScreen: React.FC = () => {
  const screenTitle: string = useSelector(
    (state: RootState) => state.menu.screenTitle,
  )
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default MainScreen
