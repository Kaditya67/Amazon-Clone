import { createSlice } from "@reduxjs/toolkit";
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
            const existingProduct = state.favouriteData.find(
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
        deleteProduct:(state,action) => {
            state.productData = state.productData.filter(
                (item)=>item.id !== action.payload.id
            );
        },
        resetCart:(state) => {
            state.productData = [];
        },
        addUser:(state,action) => {
            state.userInfo = action.payload
        },
        removeUser:(state) =>{
            state.userInfo = null;
        },
        setAllProducts: (state,action) => {
            state.allProducts = action.payload;
        },
    },
});

export const { addToCart, addToFavourite, increaseQuantity, decreaseQuantity, deleteProduct, resetCart, addUser, removeUser, setAllProducts } = nextSlice.actions;

export default nextSlice.reducer;