import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useActionData } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => { 
		actions.getContacts() }, [])
		console.log(store.contact)

	return (

		<div className="container">
			{store.contact.map((contacto, index) => (

				<div key={index} className="card mb-5 my-style">
					<div className="card-body">
						<div className="d-flex bd-highlight mb-3">
							<div className="p-2 bd-highlight">
								<img src={`https://picsum.photos/seed/${contacto.id}/200/200`} className=" rounded-circle" alt="..." />
							</div>
							<div className="p-2 bd-highlight">
								<h5 className="card-text"> {contacto.full_name} </h5>
								<p className="card-text"> <i className="fas fa-map-marker-alt"></i> {contacto.address} </p>
								<p className="card-text"> <i className="fas fa-phone"></i> {contacto.phone} </p>
								<p className="card-text"> <i className="fas fa-envelope"></i> {contacto.email} </p>
							</div>
							<div className="ms-auto p-2 bd-highlight">
								<Link to={`/edit/${contacto.id}`}>
									<button className="btn btn-light" type="button"><i className="fas fa-pen"></i></button>
								</Link>
								<button className="btn btn-light" type="button" onClick={() => actions.deleteContact(contacto.id)}><i className="fas fa-trash-alt"></i></button>
							</div>
						</div>
					</div>

				</div>
			))}

		</div>

	)


};
