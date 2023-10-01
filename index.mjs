import express from 'express'

const server = express();
const PORT = 3001;

server.use(express.static('public'));


server.listen(PORT, () => {console.log(`Listening to  http://localhost:${PORT}`)})