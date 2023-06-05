import React from "react";
import SectionOne from "./components/SectionOneHome";
import ServicesOne from "./components/ServicesOne";
import ServiceTwo from "./components/ServicesTwo";
import Feature from "./components/Feature"


const Home = () =>{
    const Props = {
        title : "Super Shop",
        ImageUrl : "images/shooping.png"
    }
return (
    <>

    <SectionOne Props={Props} />
    <Feature/>
    
    <ServicesOne/>
    <ServiceTwo/>
    </>
)

}
export default Home