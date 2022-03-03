const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');

const app = express();
const port = process.env.PORT || config.port;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Response",
            description: "Hello there"
        }]
    );
});

app.listen(port, () => {
    console.log(`Start on port ${port}`);
});