import "./NavBar.css";

const Navbar = () => {
  const makeCall = () => {
    console.log("Making call to", numberToCall);
  };

  const numberToCall = "123-456-7890";

  return (
    <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
      <div className="container-fluid">
        <button
          className="btn btn-link d-md-none rounded-circle me-3"
          id="sidebarToggleTop"
          type="button"
        >
          <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              className="bg-light form-control border-0 small"
              type="text"
              id="phoneNumber"
              defaultValue={numberToCall}
              name="phoneNumber"
              inputMode="tel"
            />
            <button
              className="btn btn-primary py-0"
              type="button"
              onClick={() => makeCall()}
            >
              <i className="fas fa-phone" id="callBtn"></i>
            </button>
          </div>
        </form>

        <ul className="navbar-nav flex-nowrap ms-auto">
          <li className="nav-item dropdown no-arrow">
            <div className="nav-item dropdown no-arrow">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                href="#"
              >
                <span className="d-none d-lg-inline me-2 text-gray-600 small">
                  Carlos Washington
                </span>
                <img
                  className="border rounded-circle img-profile"
                  src={`/src/assets/img/carlos.png`}
                  alt="Profile"
                />
              </a>
              <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                  &nbsp;Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                  &nbsp;Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                  &nbsp;Activity log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                  &nbsp;Logout
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
