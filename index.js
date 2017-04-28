import express from 'express';
import bodyParser from 'body-parser';
import * as requestHandlers from './routes/requests.js';

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/ping', requestHandlers.receivefromB)

app.listen(app.get('port'), () => {
    console.log('Serving at port 3000')
});
