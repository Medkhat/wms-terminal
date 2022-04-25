import { useFormik } from 'formik'
import React, { Fragment, useEffect, useState } from 'react'
import {
  Alert,
  Button,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import * as Yup from 'yup'
import Input from '../../components/Input'
import { ActionTypes } from '../../redux/commonTypes'
import { fetchUserAuth } from '../../redux/reducers/auth'
import {
  filterRequests,
  namedRequestError,
  namedRequestsInProgress,
} from '../../redux/reducers/requests'
import { AppColors } from '../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { commonStyles } from '../../utils/styles'
import Scanner from '../Scanner'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: '500',
    color: AppColors.black,
  },
  logo: {
    width: '80%',
    height: 65,
  },
  formWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: AppColors.white,
    width: '100%',
    borderRadius: 5,
  },
})

const validationSchema = Yup.object().shape({
  client_id: Yup.string().required('Обязательное поле'),
  client_secret: Yup.string().required('Обязательное поле'),
})
const AuthScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const fetching = useAppSelector(state =>
    namedRequestsInProgress(state, ActionTypes.fetchUserAuth),
  )
  const fetchingError = useAppSelector(state =>
    namedRequestError(state, ActionTypes.fetchUserAuth),
  )

  const [userDataFromBarcode, setUserDataFromBarcode] = useState<
    string | undefined
  >(undefined)

  const formik = useFormik({
    initialValues: {
      client_id: '',
      client_secret: '',
    },
    validationSchema,
    onSubmit: data => {
      Keyboard.dismiss()
      dispatch(fetchUserAuth(data))
    },
  })

  useEffect(() => {
    if (fetching === 'failed' && fetchingError)
      Alert.alert('Внимание', fetchingError?.message, [
        {
          text: 'OK',
          onPress: () => dispatch(filterRequests(ActionTypes.fetchUserAuth)),
        },
      ])

    if (userDataFromBarcode) {
      const splittedUserData = userDataFromBarcode.split(';;-')
      formik.setFieldValue('client_id', splittedUserData[0])
      formik.setFieldValue('client_secret', splittedUserData[1])
      dispatch(
        fetchUserAuth({
          client_id: splittedUserData[0],
          client_secret: splittedUserData[1],
        }),
      )
    }
    return () => {
      setUserDataFromBarcode(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching, userDataFromBarcode])

  return (
    <Fragment>
      <Scanner setBarcode={setUserDataFromBarcode} onLogin />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/icons/main.png')}
        />
        <Text style={styles.title}>Добро пожаловать</Text>
        <View style={styles.formWrapper}>
          <Fragment>
            <Text style={commonStyles.commonText}>Авторизация</Text>
            <View style={commonStyles.formGroup}>
              <Input
                value={formik.values.client_id}
                nativeID={'client_id'}
                placeholder={'Логин'}
                onChangeText={formik.handleChange('client_id')}
                onBlur={formik.handleBlur('client_id')}
                keyboardType={'name-phone-pad'}
                returnKeyType={'next'}
                icon={'user'}
              />
              {formik.touched?.client_id && formik.errors?.client_id && (
                <Text style={commonStyles.errorMessage}>
                  {formik.errors.client_id}
                </Text>
              )}
            </View>
            <View style={commonStyles.formGroup}>
              <Input
                value={formik.values.client_secret}
                nativeID={'password'}
                placeholder={'Пароль'}
                secureTextEntry={true}
                returnKeyType={'go'}
                onChangeText={formik.handleChange('client_secret')}
                onBlur={formik.handleBlur('client_secret')}
                icon={'lock'}
              />
              {formik.touched?.client_secret &&
                formik.errors?.client_secret && (
                  <Text style={commonStyles.errorMessage}>
                    {formik.errors.client_secret}
                  </Text>
                )}
            </View>
            <View style={commonStyles.formGroup}>
              <Button
                title={fetching === 'pending' ? 'Подождите...' : 'Войти'}
                color={AppColors.primary}
                onPress={formik.handleSubmit}
                disabled={fetching === 'pending'}
              />
            </View>
          </Fragment>
        </View>
      </View>
    </Fragment>
  )
}
export default AuthScreen
