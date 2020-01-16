const express = require('express');

const app = express();

app.use(express.json());

// MongoDB

app.get('/', (request, response) => {
    return response.json({ message: 'hello world'});
});
app.listen(3333);
