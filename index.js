const { insertOne, getListOfCollections } = './settings-db/connection.js';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//database
const contacts = require('./settings-db/connection.js');

//port
const port = process.env.port || 4040;

//Default get
app.get('/', async (req, res) =>{
    res.status(201).redirect('/contacts');
});

app.get('/contacts', async (req, res) =>{
    const data = await contacts.getListOfCollections();
    res.status(211);
    
    res.send(data);
});

app.post('/contacts', async (req, res) =>{
    const data = req.body;
    if(data !== null){
        contacts.insertOne(data);
        res.send('the contact was successfully added.');
    }else{
        res.send('the contact was not added')
    }
});

//Listen default port
app.listen(port,() =>{
    const date = new Date();
    const message = `This is a consult maded in ${date.toUTCString()}, port: ${port}`;
    console.log(message);
});
