
import React from "react";
import NavBar from "./components/NavBar";
import DiaryEntriesList from "./Components/DiaryEntriesList";
import Footer from "./components/Footer";


const App = () => {
  return (

      <div>      
          <NavBar/>
          
          <DiaryEntriesList />
          <Footer />
    </div>
  );
  
};

export default App;