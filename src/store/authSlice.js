import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(current(state))
      state.isAuthenticated = action.payload.token ? true : false
      state.user = action.payload.user
      state.token = action.payload.token
      console.log(current(state))
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
