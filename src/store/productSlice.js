import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import statusCode from "../utils/status";

const productSlice = createSlice({
      name: "products",
      initialState: {
        data:[],
        status: "idle"
      },
      reducers:{

      },
      extraReducers:(builder)=>{
        builder
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.status = statusCode.IDLE
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status = statusCode.ERROR
        })
        .addCase(getProducts.pending,(state,action)=>{
            state.status = statusCode.LOADING
        })
      }
})

export const{fetchProducts} = productSlice.actions;
export default productSlice.reducer

export const getProducts = createAsyncThunk('products/get',async()=>{
       const response = await axios.get("https://fakestoreapi.com/products")
       return response;
})