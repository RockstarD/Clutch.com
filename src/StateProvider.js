

// setting up data layer for tracking the basket
import React, {createContext, useContext, useReducer} from "react";

// THIS IS DATA LAYER
export const StateContext= createContext();

// BUILD A PROVIDER
export const StateProvider=({reducer, intialState, children})=>(
<StateContext.Provider value={useReducer(reducer, intialState)}>
{children}
</StateContext.Provider>
);
export const useStateValue=()=> useContext(StateContext);

