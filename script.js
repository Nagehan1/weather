window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription =document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree =document.querySelector(".temperature-degree")
    let locationTimezone =document.querySelector(".location-timezone")

    if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
    long = position.coords.longitude;
    lat = position.coords.latitude
     const proxy = 'https://cors-anywhere.herokuapp.com/';
     const api = '${proxy}https://api.darksky.net/forecast/323cc627b42b9e049e3ac7597d8a70f5/${lat},${long}';
fetch(api)
.then(response =>{
    return response.json();

})
.then(data => {
    console.log(data);
    const {temperature, summary} = data.currently;
    temperatureDegree.textContent = temperature
    temperatureDescription.textContent = summary;
    locationTimezone.textContent =data.time

})

});

}
});

