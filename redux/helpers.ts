import { select, SelectEffect } from '@redux-saga/core/effects'
import { RootState } from './store'

// Fetch helpet
type FetchMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

export async function fetchHelper<DataType>(
  path: string,
  method: FetchMethod,
  data: DataType,
) {
  return await fetch(path, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

// Redux-saga select wrapper
export function selectState<T>(selector: (s: RootState) => T): SelectEffect {
  return select(selector)
}
