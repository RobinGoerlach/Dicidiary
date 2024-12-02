import NavBar from "./components/NavBar";
import DiaryEntries from "./components/DiaryEntries";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

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
