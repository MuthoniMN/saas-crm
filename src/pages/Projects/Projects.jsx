import React, { useState } from "react";
import "./Projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFilter } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: "A full custom website",
            service: "System",
            customerName: "John Doe",
            dueDate: "20th Jan 2024",
            price: "$3000"
        },
        {
            title: "A full custom website",
            service: "System",
            customerName: "John Doe",
            dueDate: "20th Jan 2024",
            price: "$3000"
        },
        {
            title: "A full custom website",
            service: "System",
            customerName: "John Doe",
            dueDate: "20th Jan 2024",
            price: "$3000"
        },
        {
            title: "A full custom website",
            service: "System",
            customerName: "John Doe",
            dueDate: "20th Jan 2024",
            price: "$3000",
            status: "In Progress"
        }
    ]);
    return (
        <section className="container plain-container">
            <header>
                <h2>Total Projects: {projects.length}</h2>
                <div className="btnContainer">
                    <button className="btnVariant">Sort By: Due Date</button>
                    <button className="btnVariant">Filter <FontAwesomeIcon icon={faFilter} /> </button>
                </div>
            </header>
            <NavLink to={"/project/new"}>Add New Project</NavLink>
            <div>
                <table>
                    <tr>
                        <th className="title">Project</th>
                        <th>Client</th>
                        <th>Service</th>
                        <th>Due Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th style={{ textAlign: "center" }}>Edit</th>
                    </tr>
                    {projects ? projects.map(project => (
                        <tr>
                            <td className="title"><NavLink to={`/project/id`} >{project.title}</NavLink></td>
                            <td>{project.customerName}</td>
                            <td>{project.service}</td>
                            <td>{project.dueDate}</td>
                            <td>{project.price}</td>
                            <td>{project.status || "Not Started"}</td>
                            <td style={{ textAlign: "center" }}><NavLink to={`/project/edit/id`}><FontAwesomeIcon icon={faEdit} /></NavLink></td>
                        </tr>
                    ))
                        : <td colSpan={-1}>No Projects Found</td>}
                </table>
            </div>
        </section>
    )
}

export default Projects;