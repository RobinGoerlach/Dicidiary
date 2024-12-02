import NavBar from "./components/NavBar";
import DiaryEntriesList from "./Components/DiaryEntriesList";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  return (

      <div>      
          <NavBar/>
          <Modal />
          <DiaryEntriesList />
          <Footer />
    </div>
  );
  
};

export default App;