import { Component } from "react"
import {Link} from "react-router-dom"
class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      isHovered: false,
    }
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light header-box ">
          <div className="navbar-brand">
            <div className="img w-25">
              <img src="logo.png" width={200} alt="Logo" />
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-admin" aria-controls="navbar-admin" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="admin-navabar collapse navbar-collapse" id="navbar-admin">
            <ul className="navbar-nav nav mx-auto ">
              <li className="nav-item">
                <Link to="/home" className="nav-link font-space fs-4 active" ><i className={"fa fa-home fa-light fa-md "}></i> Home</Link>
              </li>
              <li className="nav-item" >
                <Link to="/about" className="nav-link font-space fs-4" ><i className={"fa fa-light fa-circle-info  fa-md"}></i> About</Link>
              </li>
              <li className="nav-item">
                <Link to="/price" className="nav-link font-space fs-4" ><i className={"fa fa-light fa-dollar"}></i> Price</Link>
              </li>
              <li className="nav-item">
                {/* <Link to="/contact" className="nav-link font-space fs-4" ><i className={"fa fa-light fa-address-book"}></i> Contact</Link> */}
              </li>
            </ul>
            <div className="">
              <Link to="/" className="login btn-success btn mx-2"><i className="fa fa-right-to-bracket"></i> Login</Link>
              <Link  className="logout btn-success btn me-2">Logout <i className="fa fa-right-to-bracket fa-rotate-180"></i></Link>
            </div>
          </div>
        </nav>
      </>
    )
  }

}

export default Header