import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import menuList from './menuList'

export interface MenuItem {
  id: string
  label: string
  subItems?: MenuItem[]
}

interface MenuInitials {
  data: MenuItem[]
  activeSubItems: MenuItem[]
  screenTitle: string
}
const initialState: MenuInitials = {
  data: [...menuList],
  activeSubItems: menuList,
  screenTitle: '',
}

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.activeSubItems = action.payload
    },
    setScreenTitle: (state, action: PayloadAction<string>) => {
      state.screenTitle = action.payload
    },
  },
})

export const { setActiveItems, setScreenTitle } = menu.actions

export default menu.reducer
