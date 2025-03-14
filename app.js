
const apikey ="87a0419020634aa6c492af1420f1541a";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch(apiurl  + city +`&appid=${apikey}`);
    
    if(response.status == 404){
        error.style.display ="block";
        weather.style.display="none";
    }else{
        var data = await response.json();

        console.log(data);
       
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
        
        if(data.weather[0].main == "Clear"){
            document.querySelector(".weather img").src = "images/clear.png";
        }
         
        else if(data.weather[0].main == "Clouds"){
            document.querySelector(".weather img").src = "images/clouds.png";
        }
         
        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".weather img").src = "images/drizzle.png";
        }
         
        else if(data.weather[0].main == "Mist"){
            document.querySelector(".weather img").src = "images/mist.png";
        }
         
        else if(data.weather[0].main == "Rain"){
            document.querySelector(".weather img").src = "images/rain.png";
        }
         
        else if(data.weather[0].main == "Snow"){
            document.querySelector(".weather img").src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        error.style.display ="none";

    }

  
    
}   


searchbtn.addEventListener("click" , ()=>{
    checkWeather(searchbox.value);

});

