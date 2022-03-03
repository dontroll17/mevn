const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();
const port = process.env.PORT || config.port;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/posts'));

mongoose.connect(config.dbURL, config.dbOptions);
mongoose.Promise = global.Promise;

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Response",
            description: "Hello there"
        }]
    );
});

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`);
        app.listen(port, () => {
            console.log(`Start on port ${port}`);
        });
    })
    .on('error', e => console.error(e));

