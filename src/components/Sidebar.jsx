import { faBriefcase, faCalendar, faChartBar, faChartColumn, faGear, faListCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "../App.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const [active, setActive] = useState("")
    return (
        <nav>
            <h3>CRM</h3>
            <ul>
                <li>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faChartColumn} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/deals">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clients">
                        <FontAwesomeIcon icon={faUserGroup} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/activities">
                        <FontAwesomeIcon icon={faListCheck} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/meetings">
                        <FontAwesomeIcon icon={faCalendar} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        <FontAwesomeIcon icon={faGear} />
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Sidebar;