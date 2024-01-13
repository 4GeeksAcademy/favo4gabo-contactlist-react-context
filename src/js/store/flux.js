const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [1, 2],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getContacts: () => {

				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Gabriel")
					.then((response) => response.json())
					.then((data) => {
						let store = getStore()
						setStore({ ...store, contact: data })
						console.log(data)
					})

			},

			createContact: (data) => {

				console.log("Datos a enviar:", data);
				
				const actions = getActions();
				const URL = "https://playground.4geeks.com/apis/fake/contact/";
				const opt = {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(data),
				};

				fetch(URL, opt)
					.then((response) => {
						console.log("Respuesta:", response);
						if (response.ok) {
							actions.getContact();
							alert("Contacto creado con éxito");
						} else {
							throw new Error("Error al crear contacto");
						}
					})
					.catch((error) => {
						console.log("Error:", error);
						alert(error.message);
					});
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
