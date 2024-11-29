const Navbar = () => {
  
 return (
  <nav className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="text-2xl font-bold text-primary">
      Personal Diary
    </div>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      Add Entry
    </button>
  </nav>
);
};

  
  export default Navbar;