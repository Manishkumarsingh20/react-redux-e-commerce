
import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import React,{useEffect} from "react";
import reducer from "../AllReducer/Reducer"
// import SingleReducer from "../AllReducer/SingleReducer"

const NewContext = createContext();



const NewAppProvider = ({ children }) => {

    const intialstate = {
        Erro:false,
        Loading:false,
        FeaturedImage:[],
        data:[],
        SingleLoading: false,
        singleProduct: {},
        
    }

     const Getdata = async()=>{
      dispatch({ 
        type: "LOADER",
       });
    try{
        const Api = "https://dummyjson.com/products"
        const response = await axios.get(Api);
        const data = await response.data; 
        const Newproduct = await data.products;
        // console.log(Newproduct)
        dispatch({
          type:"LIST",
          payload:Newproduct,
        })
    }
    catch(error){
        console.log("this is a error" , error)
        dispatch({
          type:"Error"
        })
    }
     }


       // my 2nd api call for single product
  
  const getSingleProduct = async (url) => {
    // dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      // const url = "https://dummyjson.com/products"
      const res = await axios.get(url);
      const singleProduct = await res.data;
     
      // const Newproduct = await singleProduct.singleProduct;
      // console.log(Newproduct)
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };



     useEffect(()=>{
        Getdata();

     },[])


     const [state ,dispatch] = useReducer(reducer,intialstate)





  return (
    <NewContext.Provider value={{ ...state,getSingleProduct}}>
      {children}
    </NewContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(NewContext);
};

export { NewAppProvider, NewContext, useProductContext };