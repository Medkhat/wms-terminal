import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit'
import { all, call, put, spawn } from 'redux-saga/effects'
import { AsyncActionPayload, ResponseError } from '../commonTypes'
import { failed, finished, started } from '../reducers/requests'
import { authWatcher } from './auth'

type FetchGenerator<Payload, ResponseData> = {
  fetcher: (p: Payload) => Promise<Response>
  payload: Payload
  action:
    | ActionCreatorWithPayload<AsyncActionPayload<ResponseData, Payload>>
    | ActionCreatorWithoutPayload
    | undefined
  requestName: string
}

export function* fetchGenerator<Payload, ResponseData>(
  args: FetchGenerator<Payload, ResponseData>,
) {
  const { fetcher, payload, action, requestName } = args
  yield put(started({ name: requestName, inProgress: 'pending' }))
  try {
    const response: Response = yield call(fetcher, payload)
    const data: ResponseData = yield response.json()
    if (!response.ok) throw data
    else {
      yield all([
        action && put(action({ responseData: data, payload })),
        put(
          finished({ name: requestName, inProgress: 'success', error: null }),
        ),
      ])
    }
  } catch (error) {
    yield put(
      failed({
        name: requestName,
        inProgress: 'failed',
        error: error as ResponseError,
      }),
    )
  }
}

export function* rootWatcher() {
  yield all([spawn(authWatcher)])
}
