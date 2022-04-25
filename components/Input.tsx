import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { AppColors } from '../utils/constants'

interface InputProps extends TextInputProps {
  icon: string
}

const Input: React.FC<InputProps> = props => {
  return (
    <View style={styles.wrapper}>
      <Icon name={props.icon} color={AppColors.gray} style={styles.icon} />
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.gray,
    borderRadius: 5,
  },
  icon: {
    width: 23,
    fontSize: 18,
    marginLeft: 9,
  },
  input: {
    paddingVertical: 3,
    fontSize: 15,
    flex: 1,
  },
})

export default Input
