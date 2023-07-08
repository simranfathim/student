import { configureStore } from "@reduxjs/toolkit";
import contactSlice from './Adddetail';

export const store=configureStore({
    reducer:{
        contact:contactSlice
    }
      
})

