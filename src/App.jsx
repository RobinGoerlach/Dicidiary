import DiaryEntriesList from "./Components/DiaryEntriesList";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-base-200 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary">Welcome</h1>
          <p className="mt-4 text-lg text-secondary">
            This is your personal digital Diary
          </p>
          <DiaryEntriesList />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
