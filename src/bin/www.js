import mysql from 'mysql';
import dotenv from 'dotenv';
import app from '../app';
import logger from '../../logger';

dotenv.config();

// Get the hostname and port to listen on
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 1111;

 //const connectionUrl = process.env.NODE_ENV === 'test'
  // ? process.env.DB_URL_TEST : process.env.DB_URL;

// connect to mongodb database
const database = 'ecommerce'
const dbConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ecommerce',
  port: '1111'
});

console.log('I got here')
// connect to database
dbConnection.connect(logger.info(`connected to ${database}`)); 

app.listen(port, () => {
  logger.info(`API is listening on ${hostname}:${port}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(); // properly close db connection
  logger.info('Shutting down server...');
  logger.info('Server successfully shutdown');
  process.exit(0);
});
