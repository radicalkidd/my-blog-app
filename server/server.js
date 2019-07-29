const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/../client/dist/'));

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`App is listening on port ${port}!`));
