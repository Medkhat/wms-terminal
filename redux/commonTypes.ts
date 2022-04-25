/* eslint-disable no-shadow */
export interface ResponseError {
  status: string
  code: number
  message: string
  validation?: Object[]
}
export interface WorkerParams<T> {
  payload: T
  type: string
}
export enum ActionTypes {
  fetchUserAuth = 'user/auth',
}
export type AsyncActionPayload<ResponseData, Payload> = {
  responseData: ResponseData
  payload: Payload
}
