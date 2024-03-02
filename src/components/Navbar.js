import React from 'react'
import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';
import { Link } from 'react-router-dom';
 
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="form-check form-switch">
                            <ToggleButton />
                        </div>
 
                    </form>
 
                </div>
            </div>
        </nav>
 
 
    )
}
 
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
 
Navbar.defaultProps = {
    title: "Title Missing",
    about: "Title Missing"
}
 
export default Navbar