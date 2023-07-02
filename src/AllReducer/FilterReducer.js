
const Reducer = (state,action)=>{
    if(action.type==="FILTER_SECTION_DATA"){
        return{
            ...state,
            filterSection:[...action.payload],
            productSection:[...action.payload]
        
    }
    }
    if(action.type === "Show_me_Grid_view"){
        return {
            ...state,
            Threeimage:true,
        }
    }
    if(action.type==="Show_me_List_view")
    return {

        ...state,
        Threeimage:false,
        

    }

     if(action.type === "UPDATE_FILTERS_VALUE"){
        const { name, value } = action.payload;

        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };

        
      }

    if(action.type==="sorting_your_value"){

     const datavalue = document.getElementById("sort");
     const newdatavalue =datavalue.options[datavalue.selectedIndex].value;
     console.log(newdatavalue)

        return {
            ...state,
            sorting_value:newdatavalue,
        }
    }

    if(action.type==="DATA_SORT"){
    //    console.log(state.sorting_value)
       let newsortingvalue
       let allData = [...action.payload]

      
       if(state.sorting_value === "ascending"){
        newsortingvalue =  [...allData].sort((a,b)=>{
           return a.category.localeCompare(b.category);
          
        })
        // console.log(newsortingvalue)
       }
       if (state.sorting_value === "descending") {
        newsortingvalue = [...allData].sort((a, b) => {
         return b.category.localeCompare(a.category);
        });
      }

      if(state.sorting_value === "lowest"){
        const sorttohigh = ((a,b)=>{
            return a.price-b.price
        })
     
        newsortingvalue = [...allData].sort(sorttohigh);
      }
      
      
      if(state.sorting_value === "high"){
        const hightolow = ((a,b)=>{
            return b.price-a.price
        })
     
        newsortingvalue = [...allData].sort(hightolow);
      }

        return{
            ...state,
            filterSection: newsortingvalue,
            
        }
            
        
        
    }

   

    if(action.type === "FILTER_ALL"){
     let newsearcheddate;
    let{productSection} = state;
    
    let allsearcheddate = [...productSection]
  

    const {text,category} = state.filters
    

    if (text) {
       newsearcheddate = allsearcheddate.filter((curElem) => {
        return curElem.title.toLowerCase().includes(text);
      });
 
    }

   else if (category) {
      newsearcheddate = allsearcheddate.filter(
        (curElem) => curElem.category === category
      );
    }

    // console.log(newsearcheddate)


    const updatedState = {
      ...state,
      filterSection: newsearcheddate,
    };
    
    

    console.log(updatedState);

    return updatedState


      
      
      

  }
}

    export default Reducer