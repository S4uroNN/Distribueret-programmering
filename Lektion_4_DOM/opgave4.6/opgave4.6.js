const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function createTable(){
    let body = document.body;
    let table = document.createElement('table')
    body.appendChild(table);
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    console.log(table);

    // Get header descriptors
    for(let key in Object.getOwnPropertyDescriptors(MOUNTAINS[0])){
        console.log(key);
        let h = document.createElement('th');
        h.innerHTML = key;
        headerRow.appendChild(h);
    }

    MOUNTAINS.forEach((mountain) => {
        let tablerow = document.createElement('tr');
        table.appendChild(tablerow);
        let name = document.createElement('td');
        name.innerHTML = mountain.name;
        tablerow.appendChild(name);
        let height = document.createElement('td');
        height.innerHTML = mountain.height;
        tablerow.appendChild(height);
        let location = document.createElement('td');
        location.innerHTML = mountain.place;
        tablerow.appendChild(location);
    });
}

createTable();
