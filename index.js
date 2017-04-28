import express from 'express';
import bodyParser from 'body-parser';
import * as requestHandlers from './routes/requests.js';

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/ping', requestHandlers.receivefromB);

//We want to call the middleware function ourselves so we can handle any file errors

requestHandlers.sendtoC('172.27.40.239', 8888, 'hello')

app.listen(app.get('port'), () => {
    console.log('Serving at port 3000')
});
