import React from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="bg-base-200 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary">Welcome</h1>
        <p className="mt-4 text-lg text-secondary">
          This is your personal digital Dary
        </p>
      </div>
      
     
      <div>
      <Modal />
      </div>
      
      <Footer />
    </div>
  );
  
};

export default App;
