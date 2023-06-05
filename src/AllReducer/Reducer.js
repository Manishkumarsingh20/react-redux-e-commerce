

const Reducer = (state , action) =>{

 if(action.type ==="LOADER"){
     return {
        ...state,
        Loading:true
     }

    }
  if(action.type === "Erro")   {
    return {
        ...state,
        Loading:false,
        Error:true,
    }
  }
  if(action.type ==="LIST"){
    const FatureListData = action.payload.filter((CurrentElement)=>{
      return  CurrentElement.rating > 4.6;
      
    })
  
   
    return {
        ...state,
        Loading:false,
        Error:false,
        FeaturedImage:FatureListData,
        data:action.payload,
   
    }
    
  }
  

 if(action.type === "SET_SINGLE_LOADING"){
    return {
      ...state,
      isSingleLoading: true,
    };

  }
  
  if(action.type === "SET_SINGLE_PRODUCT"){
  
    return {
      ...state,
      isSingleLoading: false,
      singleProduct: action.payload,
    };
  }

  if(action.type === "SET_SINGLE_ERROR"){
  
 
    return {
      ...state,
      isSingleLoading: false,
      isError: true,
    };
  
  }
  
  else{
    return{
        ...state
    }
  }

   

 }





export default Reducer;