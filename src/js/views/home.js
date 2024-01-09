import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useActionData } from "react-router";

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(() => {actions.getContacts()}, [])
	console.log(store.contact)

	return(
		 
	<div className="text-center mt-5">
	<div className="card mb-3 my-style">
<div className="row g-0">
<div className="col-md-4">
  <img src="https://picsum.photos/200/300" className="img-fluid rounded-start" alt="..."/>
</div>
<div className="col-md-8">
  <div className="card-body">
	<h5 className="card-title">Card title</h5>
	<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
</div>
</div>
)
};
