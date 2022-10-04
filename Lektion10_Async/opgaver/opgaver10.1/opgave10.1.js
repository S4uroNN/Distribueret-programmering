// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}


function hentdata(url) {
    return new Promise(function (resolve, reject) {
        let data = get(url);
        setTimeout(afslut, 500);
        function afslut() {
            if (data != " ") {
                resolve(data)
            } else if (data === undefined) {
                reject("Ikke ok")
            }
        }
    })
}



//hentdata(userUrl).then(resultat => console.log(resultat))
//    .catch(fejl => console.log("Fejl/exception"))


async function main() {
    console.log("hi")
    let result = await get(userUrl);
    console.log(result)
    console.log("bye")
}

console.log("test")
main()
console.log("test2")



