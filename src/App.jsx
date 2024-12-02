import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import DiaryEntries from "./components/DiaryEntries";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Modal />
      <DiaryEntries />
      <Footer />
    </div>
  );
};

export default App;
