import { Collections } from '../components/App/App.types';

export interface Response {
	results: Collections[];
	total: number;
	total_pages: number;
}
