const express = require("express");
const app = express();
let beskeder = [{
    rum1: {
        user1: {
            navn: "Emil",
            tekst: "HEJ"
        },
        user2: {
            navn: "Alin",
            tekst: "Hej igen"
        },
        user3: {
            navn: "Markus",
            tekst: "Jeg er ikke til stede"
        }
    }
}]
let rum = [{
    rum1: {
        navn: "Rum 1"  
    },
    rum2: {
        navn: "Rum 2"
    },
    rum3: {
        navn: "Rum 3"
    }
}]

function getAlleBeskeder() {
    app.get('/messages', (request, response) => {
        switch (request.url) {
            case "/messages":
                response.status(200);
                response.send(beskeder)
                break
            case "/rum":
                response.status(200);
                response.send(rum)
                break
        }

    })
}
getAlleBeskeder();
app.listen(8000)
