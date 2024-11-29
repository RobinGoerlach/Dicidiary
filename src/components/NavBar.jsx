const Navbar = () => {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="text-center flex-grow-1">
            <h5 className="mb-0">This is your Personal Diary</h5>
          </div>
          <button className="btn btn-primary ms-auto">Add Entry</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;