import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditarContacto = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [data, setData] = useState({
        "full_name": "",
        "email": "",
        "phone": "",
        "address": "",
        "agenda_slug": "Gabriel"
    });
    const editar = async (event) => {
        event.preventDefault()
        try {
            await actions.editContact(id, data)
        } catch (error) {
            console.log(error)
        }

    };
    const info = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    };

    useEffect(() => {
        actions.getContactById(id)
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error al recibir detalles del contacto:", error);
            });

    }, [actions, id]);


    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" onChange={info} name="full_name" required value={data.full_name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" onChange={info} name="email" required value={data.email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone" onChange={info} name="phone" required value={data.phone} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" onChange={info} name="address" required value={data.address} />
                </div>
                <div className="container">
                    <div className="row">
                        <button className="btn btn-primary" type="button" onClick={editar}>Edit</button>
                    </div>
                </div>
            </form>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}