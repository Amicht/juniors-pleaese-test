import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const PORT = 3001;

server.use(express.static('public'));
server.get("*", async (req,res)=>{
    
    const filePathName = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePathName);
})


server.listen(PORT, () => {console.log(`Listening to  http://localhost:${PORT}`)})