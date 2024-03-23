import pbClient from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const userData = await pbClient
		.collection('users')
		.authWithPassword('phuc.ng13988@gmail.com', '12345678');
	console.log(userData);

	return {
		user: userData
	};
};
