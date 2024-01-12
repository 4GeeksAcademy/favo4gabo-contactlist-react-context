import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useActionData } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => { actions.getContacts() }, [])
	console.log(store.contact)

	const contact = []

	// {
	// 	store.contact.map((index) => {
	return (

		<div className="text-center mt-5">
			{store.contact.map((contacto, index) => (

				<div key={index} className="card mb-3 my-style">
					<div className="row g-0">
						<div className="col-md-6">
							<img src={`https://picsum.photos/seed/${contacto.id}/200/200`} className=" rounded-circle" alt="..." />
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5 className="card-title">Nombre {contacto.full_name}</h5>
								<p className="card-text">Ubicacion {contacto.address}</p>
								<p className="card-text">Telefono {contacto.phone}</p>
								<p className="card-text">Email {contacto.email}</p>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			))}

		</div>

	)


};
