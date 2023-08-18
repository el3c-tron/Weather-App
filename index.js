const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const path = __dirname + "/public";

app.use(express.static(path));
app.set("view engine" , "ejs");

app.get("/" , (req , res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=new delhi&appid=6d89b59930fdb5ec0d718ed9f4078f92";
    fetch(url)
        .then(response => response.json())
        .then((data) =>{
            console.log(data.name);
            console.log(data.weather[0].main);
            const values = {
                city : (data.name),
                temp :((data.main.temp)-273.15).toFixed(2),
                min :((data.main.temp_min)-273.15).toFixed(2),
                max :((data.main.temp_max)-273.15).toFixed(2),
                temp_type :data.weather[0].main
            };
            
            res.render("home" , values);
            
        })
});

app.listen(2000 , ()=>{
    console.log("server started");
});