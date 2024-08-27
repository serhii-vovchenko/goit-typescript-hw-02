import axios from 'axios';
import { Response } from './api-query.types';
const BASE_URL = 'https://api.unsplash.com/search/photos?';
const API_KEY = 'client_id=VXfcRwCOWAURKa8z5UbGvG6BpLZHFNQ7vqT_Ot39ox4';

const searchInDatabase = async (
	query: string,
	page: number
): Promise<Response> => {
	const response = await axios.get(`${BASE_URL}${API_KEY}`, {
		params: {
			query,
			page,
			per_page: 12,
		},
	});

	return response.data;
};

export default searchInDatabase;
