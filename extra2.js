let table = ""    ;
function getIP() {
    let url = `https://jsonplaceholder.typicode.com/posts`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const user of data) {

                table += `<tr><td>${user.id}</td> <td>${user.title}</td></tr>`;
            }
            const tbodyOfTable = document.querySelector("#fetchTable tbody");
            tbodyOfTable.innerHTML = table;
        })
        
        .catch(error => console.error('Error:', error));

}
