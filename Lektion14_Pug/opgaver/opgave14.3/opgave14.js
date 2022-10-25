const express = require('express')
const app = express();
const pug = require('pug');
const path = require('path');
const fetch = require('node-fetch');


const url = 'https://randomuser.me/api/?nat=dk&results=100'

const result = get(url).then((value) => value.result)
    
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

app.set('view engine', ' pug')
app.set('views', path.join(__dirname, '/views'));

console.log(pug.renderFile(path.join(__dirname, '/views/pug.pug'), result));

app.get('/', (req, response) => response.render('opgave14', result))
app.listen(8000, () => console.log('Test running'))