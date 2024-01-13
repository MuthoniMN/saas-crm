import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="topNav">
            <h3>Dashboard</h3>
            <div>
                <button onClick={() => setDropdown(!dropdown)}>Add New <span style={{ marginLeft: "12px", fontSize: "20px" }}>+</span></button>
                {dropdown && <div className="drop-down">
                    <ul>
                        <li><a href="/client/new">Client <FontAwesomeIcon icon={faArrowRight} /></a></li>
                        <li><a href="/deal/new">Deal <FontAwesomeIcon icon={faArrowRight} /></a></li>
                        <li><a href="/meeting/new">Meeting <FontAwesomeIcon icon={faArrowRight} /></a></li>
                    </ul>
                </div>}
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