import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/routers'
import React, { Fragment } from 'react'
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  MenuItem,
  setActiveItems,
  setScreenTitle,
} from '../../redux/reducers/menu/menu'
import { AppDispatch } from '../../redux/store'
import { AppColors } from '../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { ScreenNames } from '../types'

export function MenuListScreen({
  navigation,
  route,
}: NativeStackScreenProps<
  ParamListBase,
  ScreenNames.SubMenu | ScreenNames.Home
>) {
  const dispatch: AppDispatch = useAppDispatch()

  const menu: MenuItem[] = useAppSelector(state => state.menu.activeSubItems)
  const allMenuList: MenuItem[] = useAppSelector(state => state.menu.data)

  const list: MenuItem[] = route.name === ScreenNames.Home ? allMenuList : menu

  const onPress = (id: string, hasSubItems: boolean, title: string) => {
    if (hasSubItems) {
      navigation.navigate(ScreenNames.SubMenu)
      dispatch(setScreenTitle(title))
      dispatch(
        setActiveItems(list.find(item => item.id === id)?.subItems ?? []),
      )
    } else {
      Alert.alert(title)
    }
  }

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        {list.map((item, index) => (
          <Pressable
            key={item.id}
            onPress={() => onPress(item.id, !!item.subItems, item.label)}>
            <View style={styles.menuItem}>
              <Text style={styles.text}>
                {index + 1}. {item.label}
              </Text>

              <Icon
                name={'arrow-forward-ios'}
                color={AppColors.gray}
                style={styles.icon}
              />
            </View>
          </Pressable>
        ))}
        {route.name === ScreenNames.Home && (
          <Pressable>
            <View style={styles.menuItem}>
              <Text style={styles.redText}>Выйти</Text>
              <Icon
                name={'logout'}
                color={AppColors.error}
                style={styles.icon}
              />
            </View>
          </Pressable>
        )}
      </ScrollView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: AppColors.black,
  },
  redText: {
    fontSize: 18,
    color: AppColors.error,
  },
  icon: {
    fontSize: 18,
  },
  menuItem: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.white,
    '&:last-child': {
      marginBottom: 10,
    },
  },
})
