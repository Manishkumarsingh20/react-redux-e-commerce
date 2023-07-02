import React, { useContext , useEffect } from 'react'
import { createContext , useReducer } from 'react'
import Reducer from "../AllReducer/FilterReducer"
import {useProductContext} from "../ContextUse/Provider"


const NewFilterContext = createContext()
const intialstate = {
    filterSection:[],
    productSection:[],
    Threeimage:true,
    sorting_value:"lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
    },
  };



function CreateContexFilter({children}) {

    const{data} =useProductContext();
//    console.log(data);
    const[state,dispatch] = useReducer(Reducer,intialstate)

    // console.log(state.filterSection)
   const Gridview = ()=>{
    dispatch({
        type:"Show_me_Grid_view"
    })
   }


   const displayList=()=>{
    dispatch({
        type:"Show_me_List_view"
    })
   }

  const Sortingdata = ()=>{
    dispatch({
        type:"sorting_your_value"
    })
  }

//filtering by search





  const allfilter = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  useEffect(()=>{
  dispatch({type:"FILTER_ALL"})
  dispatch({type:"DATA_SORT",
    payload:data
})

  },[state.sorting_value,state.filters])

    useEffect(() => {
        dispatch({
          type: "FILTER_SECTION_DATA",
          payload: data
        });
      }, [data]); 

  return (
   <NewFilterContext.Provider value={{...state, Gridview ,displayList,Sortingdata,allfilter }}>{children}

   </NewFilterContext.Provider>


  )
}

const NewFiltercustomHook = ()=>{
    return useContext(NewFilterContext);
}

export {CreateContexFilter,NewFiltercustomHook,NewFilterContext}