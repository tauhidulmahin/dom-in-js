let head = "";
let body = "";

const countries = [
    { reagion: "Asia",
     name: "Bangladesh",
      cncode: "Bd" },
    {
      reagion: "Asia",
      name: "India",
      cncode: "In",
    },
  ];

  for (const country  of countries) {
      body += `<td> ${country.cncode}</td>`;
      head += `<td> ${country.name}</td>`;
  }
  document.getElementById("myTable").innerHTML=`<tr>${head}</tr> <tr>${body}</tr>`;

