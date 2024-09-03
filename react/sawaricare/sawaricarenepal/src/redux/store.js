import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerSlice/counterSlice'
import boxSlice from './reducerSlice/boxSlice'
import productSlice from './reducerSlice/productSlice'

export default configureStore({
  reducer: {
    counter:counterSlice,
    box:boxSlice,
    product:productSlice
  }
})