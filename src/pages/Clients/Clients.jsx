import React, { useState } from "react";
import "./clients.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFilter } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Clients = () => {
    const [clients, setclients] = useState([
        {
            name: "Jane Doe",
            email: "j.doe@gmail.com",
            phoneNumber: "+3242352441",
            project: "System Configuration"
        },
        {
            name: "Jane Doe",
            email: "j.doe@gmail.com",
            phoneNumber: "+3242352441",
            project: "System Configuration"
        },
        {
            name: "Jane Doe",
            email: "j.doe@gmail.com",
            phoneNumber: "+3242352441",
            project: "System Configuration"
        },
        {
            name: "Jane Doe",
            email: "j.doe@gmail.com",
            phoneNumber: "+3242352441",
            project: "System Configuration"
        }
    ]);
    return (
        <section className="container plain-container">
            <header>
                <h2>Total clients: {clients.length}</h2>
                <div className="btnContainer">
                    <button className="btnVariant">Filter <FontAwesomeIcon icon={faFilter} /> </button>
                </div>
            </header>
            <NavLink to={"/client/new"}>Add New Client</NavLink>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th className="title">Email</th>
                        <th>Phone Number</th>
                        <th className="title">Project</th>
                        <th className="title">Book a Meeting</th>
                        <th>Edit</th>
                    </tr>
                    {clients ? clients.map(client => (
                        <tr>
                            <td><NavLink to={`/client/id`} >{client.name}</NavLink></td>
                            <td className="title">{client.email}</td>
                            <td>{client.phoneNumber}</td>
                            <td className="title">{client.project}</td>
                            <td className="title"><NavLink to={"/meeting?client=dream"}>Book a Meeting</NavLink></td>
                            <td><NavLink to={`/client/edit/id`}><FontAwesomeIcon icon={faEdit} /></NavLink></td>
                        </tr>
                    ))
                        : <td colSpan={-1}>No Clients Found</td>}
                </table>
            </div>
        </section>
    )
}

export default Clients;