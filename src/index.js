import app from './app.js';
import cors from 'cors'
import {SERVER_PORT} from './config.js'

app.use(cors());
app.listen(SERVER_PORT);
console.log('Server running on ', `http://localhost:${SERVER_PORT}/`);

