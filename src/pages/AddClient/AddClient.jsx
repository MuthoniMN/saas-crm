import React from "react";
import "./AddClient.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AddClient = () => {
    const navigate = useNavigate()
    return (
        <section className="container">
            <section>
                <header>
                    <h2>Add a Client</h2>
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={() => navigate("/")} />
                </header>
                <form>
                    <div>
                        <label htmlFor="avatar" className="fileBtn">Add Avatar</label>
                        <input type="file" name="avatar" id="avatar" hidden />
                    </div>
                    <div className="flex">
                        <div className="inputContainer">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" name="firstName" id="firstName" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inputContainer">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" id="phone" />
                        </div>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="address">Address:</label>
                        <input type="tel" name="address" id="address" />
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
export default AddClient;