const {destinations} = require("./db");
const express = require("express");

//const PORT = 3000;

const PORT = process.env.PORT || 3000;

const server = express();
server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});

server.get('/', (req, res) => {
    res.send(destinations);
});