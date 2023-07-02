import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import Contact from "./Contact"
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import Errorpage from "./ErrorPage"
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";



const App = () => {

  const theme = ()=>({
    colors: {
     heading : "red",
     text:"black",
     white:"white",
     black:"#ffffff",
     helper:"orange",
     bg:"#0F1111",
     footer_bg:"black",
     btn:"neon",
     border:"black",
     hr:"white",
     gradient:"purple",
     shadow:"cyna",
     shadowSupport:"black",

    },
    media: {
      mobile:"768px",
      tab:"998px",

    }, 
  });
 
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/about" element={<About/>} />
      <Route path = "/product" element={<Products/>} />
      <Route path = "/contact" element={<Contact/>} />
      <Route path ="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path ="/cart" element={<Cart/>}/>
      <Route path = "*" element = {<Errorpage/>}/>
    </Routes>
    <Footer/>
    </Router>
    </ThemeProvider>

  )
};

export default App;
