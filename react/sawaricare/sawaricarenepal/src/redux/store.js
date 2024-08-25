import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'

export default configureStore({
  reducer: {
    counter:counterSlice
  }
})