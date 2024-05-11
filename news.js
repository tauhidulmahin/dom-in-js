// let list = "";
// let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`;
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         for (const x of data.articles) {
//             list += `<div>
//             <a href = ${x.url} target = "_blank">
//             <img src= ${x.urlToImage} width = "250px">
//             <div>
//               <h5>${x.title}</h5>
//               <p>${x.description}</p></a>
//             </div>
//           </div>`;
//         }
//         const tbodyOfTable = document.querySelector("#fetchList");
//         tbodyOfTable.innerHTML = list;
//     })

//     .catch(error => console.error('Error:', error));





let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0a57ab53b6e349f8934f6ecb46b23a71`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        for (const x of data.articles) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<a href="${x.url}" target="_blank">
                                <img src="${x.urlToImage}" width="300px">
                                <div>
                                  <h5>${x.title}</h5>
                                  <p>${x.description}</p>
                                </div>
                              </a>`;
            document.getElementById('fetchList').appendChild(card);
        }
    })
    .catch(error => console.error('Error:', error));


    

