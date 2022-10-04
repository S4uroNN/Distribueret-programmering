// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main() {
    try {
        let result = await get(userUrl);
        console.log(result)
        let body = document.querySelector("body")
        body.innerHTML = '<table id ="main"> </table>'
        let table = document.querySelector("#main")
        for (let i of result) {
            table.innerHTML = table.innerHTML + "<tr> <td> <a href ="+postUrl + i.id +">"+ i.id+"</a>" + "</td> <td>" + i.name + "</td></tr>"
        }
        let tableItems = document.querySelectorAll("tr")
        for (let i of tableItems) {
            i.style.color = "blue"
        }

        let table1 = document.createElement("table")
        let row = document.createElement("tr")
        let column = document.createElement("td")
        let text = document.createTextNode("WhaT")

        table.appendChild(row)
        row.appendChild(column)
        column.appendChild(text)

    } catch {
        console.log("Fejl / Exception")
    }
}


main()

//let tableItems = document.querySelectorAll("td")
//for (let i of tableItems) {
//    i.onclick = showInfo
//}

async function showInfo(event) {
    try {
        let result = await get(userUrl) + event.target.id;
        let footer = document.querySelector("footer");
        footer.innerHTML = "<table> test</table>"
    } catch {
        
    }
}

