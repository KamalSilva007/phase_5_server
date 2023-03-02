const express = require('express');
const bodyParser = require('body-parser');
const zip = require('express-easy-zip');
const cors = require('cors');
const { pushChanges } = require('./helpers/PushChanges');
const { pullChanges } = require('./helpers/PullChanges');
const app = express();
app.use(express.json({ limit: '10mb' }));

const textJavascriptParser = (req, res, next) => {
    if (req.headers['content-type'] === 'text/javascript') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            req.body = body;
            next();
        });
    } else if (req.headers['content-type'] === 'application/x-zip-compressed') {
        let zipBuffer = Buffer.alloc(0);
        req.on('data', (chunk) => {
            zipBuffer = Buffer.concat([zipBuffer, chunk]);
        });
        req.on('end', () => {
            req.zipBuffer = zipBuffer;
            next();
        });
    } else {
        next();
    }
};

app.use(textJavascriptParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(zip());

require('./routes/routes')(app);

const server = app.listen(3002, () => {
    console.log('listening on port %s...', server.address().port);
});
