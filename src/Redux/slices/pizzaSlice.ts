import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

interface PizzaItems {
    id: string,
    title: string,
    imageUrl: string,
    subtitle: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
}
export enum Status {
    LOADING = 'loading',
    SUCCUSS = 'success',
    ERROR = 'error',
  }

  interface PizzaSliceState {
    items: PizzaItems[];
    status: Status;
  }

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING

}
export const fetchProducts = createAsyncThunk<PizzaItems[]>(
    'pizzas/fetchPizzas',
    async () => {
      const {data} = await axios.get('https://64033600302b5d671c4979aa.mockapi.io/products');
      return data;
    }
    
  );

export const pizzaSlice = createSlice({
  name: 'pizzaSlice',
  initialState,
  reducers: {
    
    
  },
})

export const {   } = pizzaSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPizzaData = (state: RootState) => state.pizzas
export const selectItems = (state: RootState) => state.pizzas.items;

export default pizzaSlice.reducer