
let express = require('express');
let app = express();
let pug = require('pug');
let path = require('path');



let valuesForTemplate = {
    users:
        [{
            navn: "Ole",
            alder: 30,
            venner: [{ navn: "Ib", alder: 12 },
            { navn: "Hans", alder: 11 }],
        }, {
            navn: "Emil",
            alder: 22,

            venner: [{ navn: "Markus", alder: 22 },
            { navn: "Emil", alder: 22 }]
        }]
}

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

console.log(pug.renderFile(path.join(__dirname, '/views/users.pug'), valuesForTemplate));

app.get('/', (req, response) => response.render('users', valuesForTemplate))
app.listen(8000, () => console.log('Test running'))