import React, { useState } from "react";
import "./AddProject.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
    const [clients, setClients] = useState("")
    const services = ["System Account", "Subscription"]
    const navigate = useNavigate()
    return (
        <section className="container">
            <section>
                <header>
                    <h2>Add a Project</h2>
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={() => navigate("/")} />
                </header>
                <form action="">
                    <div className="inputContainer">
                        <label htmlFor="client">Client: </label>
                        <select id="client" className="select" >
                            <option disabled selected>Choose a Client</option>
                            {!clients && <option>No Clients Found</option>}
                        </select>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="service">Service: </label>
                        <select id="service" className="select" >
                            <option disabled selected>Choose a Service</option>
                            {!services && <option>No Services Found</option>}
                            {services.map(service => <option>{service}</option>)}
                        </select>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="desc">Service Description:</label>
                        <textarea name="desc" id="desc" rows={3} cols={10} placeholder="This service includes the following deliverables: "></textarea>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="dueDate">Due Date:</label>
                        <input type="date" name="dueDate" id="dueDate" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="price">Price:</label>
                        <input type="date" name="price" id="price" />
                    </div>
                    <div className="btnContainer">
                        <button className="btnVariant" onClick={() => navigate("/")}>Cancel</button>
                        <button type="submit">Add New Client</button>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default AddProject