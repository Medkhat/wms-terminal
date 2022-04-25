import { StyleSheet } from 'react-native'
import { AppColors } from './constants'

export const commonStyles = StyleSheet.create({
  commonView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  formGroup: {
    marginVertical: 5,
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: AppColors.lightgray,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 3,
    fontSize: 15,
  },
  errorMessage: {
    fontSize: 12,
    marginLeft: 2,
    color: AppColors.error,
  },
  commonText: {
    fontSize: 16,
    marginVertical: 5,
    color: AppColors.black,
  },
})
