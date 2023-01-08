const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.end('News Api Running');
});

app.listen(port, () => {
    console.log('News server running on port', port);
})