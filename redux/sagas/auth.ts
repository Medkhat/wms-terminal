import { BASE_URL } from '@env'
import { all, takeLatest } from '@redux-saga/core/effects'
import { fetchGenerator } from '.'
import { ActionTypes, WorkerParams } from '../commonTypes'
import { fetchHelper } from '../helpers'
import { FormValues, setUserData } from '../reducers/auth'

export interface AuthResponse {
  client_id: string
  scope: {
    [key: string]: string
  }
}
const auth = async (data: FormValues) =>
  await fetchHelper<FormValues>(
    `${BASE_URL}/sso/v1/auth/terminal/signin/`,
    'POST',
    data,
  )

function* fetchUserAuthWorker({ payload, type }: WorkerParams<FormValues>) {
  yield fetchGenerator<FormValues, AuthResponse>({
    fetcher: auth,
    payload,
    action: setUserData,
    requestName: type,
  })
}

export function* authWatcher() {
  yield all([takeLatest(ActionTypes.fetchUserAuth, fetchUserAuthWorker)])
}
