import React from "react" 
import { NewFiltercustomHook } from "../ContextUse/CreateContexFilter"
import Grid from "./Grid"
import List from "./List"


const ProductListUi = ()=>{
  const{filterSection,Threeimage} = NewFiltercustomHook()
  // console.log(filterSection)

  if(Threeimage === true){
    return <Grid Allproduct ={filterSection} />
  }
  if(Threeimage ===false){
    return <List Allproduct ={filterSection} />
  }
}

export default ProductListUi