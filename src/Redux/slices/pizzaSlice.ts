import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    status: Status.LOADING,

}
  interface PizzaSliceState {
    items: PizzaItems[];
    status: Status;
  }

  export const fetchPizza = createAsyncThunk<PizzaItems[]>(
    "pizza/fetchPizza",
    async () => {
        const {data} = await axios.get<PizzaItems[]>("https://64033600302b5d671c4979aa.mockapi.io/products");
        return data
      
    }
  );


export const pizzaSlice = createSlice({
  name: 'pizzaSlice',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItems[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })
  
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCUSS;
    })
    builder.addCase(fetchPizza.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
  
})


// Other code such as selectors can use the imported `RootState` type
export const selectPizzaData = (state: RootState) => state.pizzas


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer