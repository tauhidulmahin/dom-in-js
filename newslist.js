

function getNews() {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`
    fetch(url)
    
        .then(response => response.json())
        .then(data => {
            let list = "" ;
            let listcont = "";
                for (const x of data.articles) {
                    list += `<li>${x.title}</li>`;  
                    listcont += `<li>${x.content}</li>`;  
                }
            const tbodyOfTable = document.querySelector("#fetchList");
            tbodyOfTable.innerHTML = `<li>${list}</li> <li>${listcont}</li>`;
        })

        .catch(error => console.error('Error:', error));

}

