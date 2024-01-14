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
							<div className="ms-auto p-2 bd-highlight">Flex item</div>
						</div>
					</div>

				</div>
			))}

		</div>

	)


};
