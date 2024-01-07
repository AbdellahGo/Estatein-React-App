import { configureStore } from "@reduxjs/toolkit";
import { propertiesApi } from "./RTKApis/propertiesApi";

export default configureStore({
    reducer: {
        [propertiesApi.reducerPath]: propertiesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(propertiesApi.middleware)
    
})