import express from 'express';
import { ConfigurationService } from './configuration/service';

const appConfig = ConfigurationService();

const app = express()
const port = appConfig.port;

app.get('/', (req, res) => res.send('Goodbye World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))