import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const { data, setData } = useState({
		"full_name": "",
		"email": "",
		"phone": "",
		"address": "",
		"agenda_slug": "Gabriel"
	})

	return (
		<div className="container">
			{/* <ul className="list-group">
			{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul> */}
			<div class="d-flex justify-content-center">
				<h1>Add a new contact</h1>
			</div>
			<form>
				<div class="mb-3">
					<label class="form-label">Full Name</label>
					<input type="text" class="form-control" placeholder="Full Name" />
				</div>
				<div class="mb-3">
					<label class="form-label">Email</label>
					<input type="email" class="form-control" placeholder="name@example.com" />
				</div>
				<div class="mb-3">
					<label class="form-label">Phone Number</label>
					<input type="text" class="form-control" placeholder="Enter Phone" />
				</div>
				<div class="mb-3">
					<label class="form-label">Address</label>
					<input type="text" class="form-control" placeholder="Enter Address" />
				</div>
				<div class="container">
					<div class="row">
						<button type="submit" class="btn btn-primary">Save</button>
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
