function loadGoogleMap() {
    

    const mapDiv = document.getElementById("mapDiv");
    const map = new google.maps.Map(
        mapDiv, 
        {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 10,
        }
    );

    new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'IP to Location'
    });
}


function add(x,y) {
    let result = x+y;
    console.log(result);
}

add(
    10,
    14
)


add(15)
add(20)