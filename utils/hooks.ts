import MMKVStorage, { useMMKVStorage } from 'react-native-mmkv-storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const MMKV = new MMKVStorage.Loader().initialize()

export const useStorage = (key: string, defaultValue?: string) => {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue)
  return [value, setValue]
}
