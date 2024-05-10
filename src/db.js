import cassandra from 'cassandra-driver';
import { cassandraConfig } from './config.js';

const client = new cassandra.Client({
    contactPoints: [cassandraConfig.CONTACT_POINTS],
    localDataCenter: cassandraConfig.LOCAL_DATA_CENTER,
    keyspace: cassandraConfig.KEYSPACE
});

export const connectToCassandra = () => {
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to Cassandra:', err);
        } else {
            console.log('Connected to Cassandra!');
        }
    });
};
connectToCassandra();

export const executeQuery = async (query) => {
    try {
        const result = await client.execute(query, [], { prepare: true });
        //console.log('Query result:', result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};
