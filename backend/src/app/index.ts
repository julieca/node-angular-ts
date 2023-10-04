import * as express from 'express';
import * as bodyParser from 'body-parser';

import DBConnector from './db-connector';
import Config from './config';

const app = express();

const connectDatabases = async () => {
    await DBConnector.connectMongo(Config.MONGO_URL + Config.FASHION_CLOUD_DB);
};

const addBodyParser = async () => {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
};

const listenPort = (PORT) => {
    app.listen( PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    );
};

const routing = async () => {
    app.get('/', (req, res) => {
        res.send('hello world')
    })
}

async function start() {
    await connectDatabases();
    await routing();
    await addBodyParser();
    await listenPort(Config.SERVICE_PORT);
};

export default {
    start
}
