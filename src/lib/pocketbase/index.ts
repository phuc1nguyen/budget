import { config } from '$lib/config';
import PocketBase from 'pocketbase';

const client = new PocketBase(config.database.pocketbaseApi);

export default client;
