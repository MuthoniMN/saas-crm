import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="topNav">
            <h3>Dashboard</h3>
            <div>
                <button>Add New <span style={{ marginLeft: "12px", fontSize: "20px" }}>+</span></button>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;