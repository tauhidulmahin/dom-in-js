let list = "";
let url = `https://picsum.photos/v2/list?page=2&limit=100`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        
        for (const x of data) {
            list += `<img src= ${x.download_url} width ="250px">`;
        }
        const tbodyOfTable = document.querySelector("#fetchGallery");
        tbodyOfTable.innerHTML = list;
    })

    .catch(error => console.error('Error:', error));



