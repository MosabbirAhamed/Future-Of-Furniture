import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import authReducer from './slices/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
  },
})