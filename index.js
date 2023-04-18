const express = require('express');
const app = express();
const port = 3033;

app.use(express.static(__dirname + '/assets'));
app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname }));

app.listen(port, () => console.log(`app listening on ${port}`));