let lat = ""    ;
function getIP() {
    let ip = document.getElementById("fetchTable").value;
    let url = `https://jsonplaceholder.typicode.com/posts`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const x of data) {

                lat += `<tr><td>${x.id}</td> <td>${x.title}</td></tr>`;
            }
            const tbodyOfTable = document.querySelector("#fetchTable tbody");
            tbodyOfTable.innerHTML = lat;
        })

        .catch(error => console.error('Error:', error));

}
