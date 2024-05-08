function getIP() {
    let ip = document.getElementById("fetchTable").value;
    let url = "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json"
    let countryRow
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // for (const country of countries) {
            //     let countryName = `<td>${data.name}</td>`;
            //     let countryCode = `<td>${data.code}</td>`;
            // }
            for (const country of data) {
                countryRow += `<tr><td>${country.name}</td><td>${country.code}</td></tr>`;
            }

            document.querySelector('#fetchTable tbody').innerHTML = countryRow;
            // let jsonABC = JSON.stringify(data);
            // console.log(jsonABC);
        })

        .catch(error => console.error('Error:', error));

}

