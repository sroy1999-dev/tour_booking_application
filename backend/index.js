const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const https = require('https');
const connectDB = require('./database/Database');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.get('/', (req, res) => {
    res.send("Welcome");
})

const serverCredentials = {
    key: fs.readFileSync(path.join(__dirname, './certs/key.pem'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname, './certs/cert.pem'), 'utf-8')
}

const httpsServer = https.createServer(serverCredentials, app);

httpsServer.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running successfully at port ${process.env.SERVER_PORT}`);
})