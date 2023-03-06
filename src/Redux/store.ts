import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import pizzas from './slices/pizzaSlice'
export const store = configureStore({
  reducer: {
    pizzas 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector