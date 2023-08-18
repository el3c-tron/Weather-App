const temp_image = document.querySelector("#temp_type").textContent;

const icon = document.querySelector(".icon");

icon.style.backgroundImage = "url(/sun.png)";

// const temp_image = ;

console.log(temp_image);

if(temp_image == "Clear")
    icon.style.backgroundImage = "url(/sun.png)";
else if(temp_image == "Rain")
    icon.style.backgroundImage = "url(/rainy.png)";
else if(temp_image == "Clouds")
    icon.style.backgroundImage = "url(/clouds.png)";
else if(temp_image == "Mist")
    icon.style.backgroundImage = "url(/fog.png)";
else if(temp_image == "Smoke")
    icon.style.backgroundImage = "url(/fog.png)";
else if(temp_image == "Snow")
    icon.style.backgroundImage = "url(/snow.png)";
else if(temp_image == "Haze")
    icon.style.backgroundImage = "url(/cloudy.png)";


// console.log("hello");

function get_day()
{
    const weekdays = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];

    const day = new Date();

    const current_day = weekdays[day.getDay()];
    
    return current_day
}

function get_time_date()
{
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const date = new Date();

    const current_month = months[date.getMonth()];
    const current_date = date.getDate();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let periods = "AM";

    if(hours > 11)
    {
        periods = "PM";
        if(hours > 12)
            hours -= 12; 
    }

    if(minutes < 10)
        minutes = "0"+minutes;


    if(hours == 0 && periods === "AM" )
        hours = 12;
    const current_time = `${hours}:${minutes} ${periods}`;
    return `${current_date} ${current_month} | ${current_time}`;
}


const day = get_day();
const time_date = get_time_date();

const time = document.querySelector(".time");

time.textContent = `${day} | ${time_date}`;