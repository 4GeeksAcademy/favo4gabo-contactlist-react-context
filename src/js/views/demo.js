import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Create = () => {

	const { store, actions } = useContext(Context);
	const [data, setData] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		agenda_slug: "Gabriel"
	});
	const Agregar = (event) => {
		event.preventDefault();
		actions.createContact(data); //objeto data a createContact
	};
	const info = (event) => {
		setData({
			...data, [event.target.name]: event.target.value
		})
	}

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
						<button className="btn btn-primary" type="button" onClick={Agregar}>Save</button>
					</div>
				</div>
			</form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
