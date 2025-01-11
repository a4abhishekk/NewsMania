const Navbar = ({ setCategory }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">News Mania</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCategory("technology")}>
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCategory("business")}>
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCategory("health")}>
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCategory("sports")}>
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  