function getIP() {
    let ip = document.getElementById("fetchTable").value;
    let url = `https://www.thecolorapi.com/id?format=json`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let lat = `<td>${data.code}</td> <td>${data.message}</td>`;
            const tbodyOfTable = document.querySelector("#fetchTable tbody");
            tbodyOfTable.innerHTML = lat;
        })

        .catch(error => console.error('Error:', error));

}
