// todo gets 5 day weather forecast
    function getFiveDayWeatherApi() {
        $.ajax({
            url: "api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + apiKey,
            success: function (response) {
                console.log(response)
                // var data = response.data[0]
                // var pulledData = data.main;
                // console.log(pulledData)
                // var longitude = data.longitude;
                // var fullName = data.fullName;
                // parkList.push(fullName);
            }
        })
    }