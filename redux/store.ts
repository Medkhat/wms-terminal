import createSagaMiddleware, { SagaMiddleware } from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MMKVStorage from 'react-native-mmkv-storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import auth from './reducers/auth'
import menu from './reducers/menu/menu'
import requests from './reducers/requests'
import { rootWatcher } from './sagas'

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()
const storage = new MMKVStorage.Loader().initialize()
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({ auth, menu, requests }),
  ),
  middleware: defaultMiddleware =>
    defaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootWatcher)

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
