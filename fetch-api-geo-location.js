function getIP() {
    const ip = document.getElementById("ipaddress").value;
    if (!isValidIPAddress(ip)) {
        alert("Please enter a valid IP address.");
        return; // Exit the function if the input is invalid
    }
    const apiKey = "a25ad4b491824dd28d0ecf74b70838fa";
    const url = `https://api.ipgeolocation.io/ipgeo?ip=${ip}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const latitude = parseFloat(data.latitude);
            const longitude = parseFloat(data.longitude);
            if (!isNaN(latitude) && isFinite(latitude) && !isNaN(longitude) && isFinite(longitude)) {
                loadMap(latitude, longitude);
            } else {
                throw new Error('Invalid latitude or longitude');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function loadMap(latitude, longitude) {
    const mapDiv = document.getElementById("mapDiv");
    console.log(latitude, longitude);
    const map = new google.maps.Map(mapDiv, {
        center: { lat: latitude, lng: longitude },
        zoom: 10
    });
    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'IP Location'
    });
}

function isValidIPAddress(ip) {
    // Regular expression pattern to validate an IP address
    const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

    // Check if the provided IP address matches the pattern
    return ipPattern.test(ip);
}
