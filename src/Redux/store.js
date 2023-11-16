import { ConfigureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterslice";
import { Store } from "redux";
const store = ConfigureStore(

    {
        reducer:{
          counter:counterslice
        }
    }
)

export default store

