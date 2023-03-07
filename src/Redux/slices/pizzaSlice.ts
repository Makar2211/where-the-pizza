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
  const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING

}
  interface PizzaSliceState {
    items: PizzaItems[];
    status: Status;
  }



export const fetchPizza = createAsyncThunk<PizzaItems[]>(
    "pizza/fetchPizza",
    async () => {
      try {
        const {data} = await axios.get("https://64033600302b5d671c4979aa.mockapi.io/products");
        return data
      } catch (error) {
        return console.log(error, "данные не пришли");
      }
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