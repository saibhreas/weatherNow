function getOpenWeatherApiInfo() {
    $.ajax({
        url: `https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=NJ&api_key=${API_KEY}`,
        success: function (response) {
            var data = response.data[0]
            var latitude = data.latitude;
            // var longitude = data.longitude;
            // var fullName = data.fullName;
            // parkList.push(fullName);
            console.log(fullName, latitude, longitude);
        }
    })
};