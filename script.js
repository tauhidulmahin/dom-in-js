/*let aSampleString = "";

const countries = [ {
  name:"Bangladesh", 
  code:"BD"
}, {
    name:"India", 
  code:"IN"
} ]

for(const country of countries){
  aSampleString = "<li>Hiiiiii !!!</li>";
}

document.getElementById("myContainer").innerHTML = aSampleString*/



let aSampleString = "";

const countries = [ {
  name:"Bangladesh", 
  code:"BD"
}, {
    name:"India", 
    code:"IN"
},
    {
    name:"Pakisthan", 
    code:"PK"
}]

for(const country of countries){
    // aSampleString = `<li>${country.name}</li>`;
    // aSampleString = aSampleString + `<li>${country.name}</li>`;
    // aSampleString += `<li>${country.name}</li>`;
    aSampleString += `<tr> <td>${country.name}</td>
                        <td>${country.code}</td> </tr>`;
}

document.getElementById("myContainer").innerHTML = aSampleString