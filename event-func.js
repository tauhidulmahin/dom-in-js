let head = "";
let body = "";

const countries = [
  {
    region: "Asia",
    name: "Bangladesh",
    cncode: "Bd"
  },
  {
    region: "Asia",
    name: "India",
    cncode: "In",
  },
  {
    region: "Asia",
    name: "Srilanka",
    cncode: "Sl",
  },
  {
    region: "Oceania",
    name: "Australia",
    cncode: "Aus",
  }
];

for (const country of countries) {
  head += `<tr> 
  <td> ${country.region}</td> 
  <td> ${country.name}</td> 
  <td> ${country.cncode}</td> 
  </tr>`; 
  // body += `<td> ${country.cncode}</td>`;
}
// Function defination

function loadData() {
  // document.getElementById("myTable").innerHTML=`<tr>${head}</tr> <tr>${body}</tr>`;
  const tbodyOfTable2 = document.querySelector("#myTable2 tbody");
  tbodyOfTable2.innerHTML = `<tr>${head}</tr>`;
}

// Function Call
// loadData();

