let flag = "";
function getFlag() {
    let url = `https://restcountries.com/v3.1/all`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (const x of data) {
console.log(x);
                flag += `<div>
            <h1>${x.name.common}</h1>
            <img src=${x.flags.png}>
            </div>`;
            }
            const tbodyOfTable = document.querySelector("#countryFlag");
            tbodyOfTable.innerHTML = flag;
        })

}
