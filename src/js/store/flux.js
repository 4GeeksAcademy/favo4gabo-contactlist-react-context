const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: []
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
					setStore({...store, contact:data})
					console.log(data)
				})
				
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
