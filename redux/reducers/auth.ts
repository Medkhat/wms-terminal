import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ActionTypes, AsyncActionPayload } from '../commonTypes'
import { AuthResponse } from '../sagas/auth'

export interface FormValues {
  client_id: string
  client_secret: string
}
interface AuthInitials {
  isAuth: boolean
  data: AuthResponse | undefined
}
const initialState: AuthInitials = {
  isAuth: false,
  data: undefined,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<AsyncActionPayload<AuthResponse, FormValues>>,
    ) => {
      state.isAuth = true
      state.data = action.payload.responseData
    },
  },
})

export const { setUserData } = auth.actions

export const fetchUserAuth = createAction<FormValues>(ActionTypes.fetchUserAuth)

export default auth.reducer
