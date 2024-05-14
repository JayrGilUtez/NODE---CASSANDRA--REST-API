import {config} from 'dotenv';

config();

export const SERVER_PORT = process.env.SERVER_PORT;
export const BASE_URL = process.env.BASE_URL;

export const cassandraConfig = {
    CONTACT_POINTS: process.env.CONTACT_POINTS,
    DB_PORT: process.env.DB_PORT,
    LOCAL_DATA_CENTER: process.env.LOCAL_DATA_CENTER,
    KEYSPACE: process.env.KEYSPACE
};