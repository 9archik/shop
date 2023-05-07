import axios from 'axios';
import {  ICatalogQueryData } from '../Components/Main/Main';

export const DjangoQuery = {
	async getCatalog(): Promise<ICatalogQueryData[]> {
		const response = await axios<ICatalogQueryData[], any>({
			method: 'GET',
			url: 'http://localhost:8000/catalog',
		});

		console.log('data', response.data)

		return response.data;
	},
};
