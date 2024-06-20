import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "os";
import { StoreProduct } from "../../type";

interface NextState{
    productData: StoreProduct[];
    favouriteData: StoreProduct[];
    allProducts: StoreProduct[];
    userInfo: string | null;
}


const initialState:NextState = {
    productData: [],
    favouriteData: [],
    allProducts: [],
    userInfo: null,
    
};

export const nextSlice = createSlice({
    name: "next",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            )
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        addToFavourite: (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            )
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else{
                state.favouriteData.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            )
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item.id === action.payload.id
            )
            if(existingProduct?.quantity === 1){
                existingProduct.quantity = 1
            }else{
                existingProduct!.quantity--;
            }
        },
        
    },
});

export const { addToCart } = nextSlice.actions;

export default nextSlice.reducer;