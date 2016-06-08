$.ajax({
   url: "http://ipinfo.io/json",
    success: function(resp, txt, xhr) {
       var loc = resp.city+","+resp.region+","+resp.country;
        $("#location").html(loc);
        //console.log(resp);
       // var latlong= resp.loc.split(",");
        //console.log(latlong);
        var weatherurl = `http://api.openweathermap.org/data/2.5/weather?zip=${resp.postal},us&appid=c2fec39edb282d932f0e9193fe57d7ca`;
        $.ajax({
            url: weatherurl,
            success: function(resp2, txt2, xhr2){
                console.log(resp2);
                var temp=resp2.main.temp-273;
                temp=Math.round(temp);
                $("#temp").html(temp);
             var iconName = resp2.weather[0].icon;
                var imageurl="http://openweathermap.org/img/w/"+iconName+".png";
                $("#goofy").attr("src",imageurl);
            }
        })
        
    }
    
});

