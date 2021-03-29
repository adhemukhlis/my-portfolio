import axios from "axios";
const Axios = axios.create({
	baseURL: window.location.origin,
	timeout: 6000,
	headers: {
		'Content-Type': 'application/json'
	}
});
export const fetchVariables = async( ) => {
	const config = {
		url: '/variables.json',
	};
	return await Axios( config ).then(( response ) => {
		return response.data;
	}).catch(( error ) => {
		console.log(error.toJSON( ));
		return {};
	});
}