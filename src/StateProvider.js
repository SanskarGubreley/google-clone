// to understand the below code which is helping us to use context api watch their youtube vedio 


import React ,{createContext , useContext , useReducer} from "react";

// preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer , initialState , children}) => (
    
    <StateContext.Provider  value ={ useReducer(reducer , initialState)}  >{children}</StateContext.Provider>
);

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);