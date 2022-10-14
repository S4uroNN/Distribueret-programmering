// opgave12.1.js
const earthquakeUrl ='https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
// 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php '


const table = document.querySelector("table")

const earthquakeArr = [];

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await get(url);
        console.log(respons);
        let count = 0;
        for (let j of respons.features) {
            const date = new Date(j.properties.time)
            if (j.properties.mag >= 5) {
                earthquakeArr[count] = "Styrke: " + j.properties.mag + " Sted: " + j.properties.place + " Tidspunkt: " + date
                count++;
            }
        }
        bubblesort2(earthquakeArr);
        for (let i of earthquakeArr) {
        
                //table.innerHTML += "<tr><td> " +"Styrke: "+ i.properties.mag +" Sted: " +i.properties.place + " Tidspunkt: "+ date +"</td></tr>"   
                table.innerHTML += "<tr><td> " +i +"</td></tr>" 
            
        }
    } catch (fejl) {
        console.log(fejl);
    }
}
main(earthquakeUrl);


function compare(s1, s2) {
    let comp = 0;
    if (s1 > s2) {
        comp = 1;
    } else if (s1 < s2) {
        comp = -1
    }
    return comp;

}function bubblesort2(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compare(array[j], array[j + 1]) <= 0) {
                swap(array, j)

            }
        }
    }


    function swap(array, j) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }

}