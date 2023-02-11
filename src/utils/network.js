import { HTTP, HTTPS } from "../constants/api";

/**
 * Change URL HTTP-> HTTPS 
 * @param {String} url - url to change 
 * @returns - url with HTTPS
 */

export const changeHTTP = url => {
	return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Sends Fetch request 
 * @param {String} url - url for request 
 * @returns {Promise} - Promis with request response 
 */

export const getApiResource = async (url) => {
	try {
		const res = await fetch(url); // request data from server

		if (!res.ok) {
			console.error('Could not fetch.', res.status);

			return false;
		}


		return await res.json();
	} catch (error) {
		console.error('Could not fetch (catch).', error.message);
		return false;
	}
}

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body)
// })();


export const makeConcurrentRequest = async (urls) => {
	const res = await Promise.all(urls.map(res => {
		return fetch(res).then(res => res.json())
	})) //takes iterable promises and returns them as one Promise.all()
	return res
};