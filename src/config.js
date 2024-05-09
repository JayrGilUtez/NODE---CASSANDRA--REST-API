import {config} from 'dotenv';

config();

export const cassandraConfig = {
    CONTACT_POINTS: process.env.CONTACT_POINTS,
    DB_PORT: process.env.DB_PORT,
    LOCAL_DATA_CENTER: process.env.LOCAL_DATA_CENTER,
    KEYSPACE: process.env.KEYSPACE
};