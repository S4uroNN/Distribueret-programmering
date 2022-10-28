const express = require('express')
const app = express();
const pug = require('pug');
const path = require('path');
const fetch = require('node-fetch');


const url = 'https://randomuser.me/api/?nat=dk/fr&results=1000'
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))


//Promise function, derfor .then callback
const results = get(url)
results.then((result) => {
    printresult(result)
});

//Sender afsted til Pug fil, til unpack
function printresult(results) {
    const liste = results;

    console.log(pug.renderFile(path.join(__dirname, '/views/users.pug'), liste));
    app.get('/', (req, response) => response.render('users', liste))
}


app.listen(8000, () => console.log('Test running'))
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}