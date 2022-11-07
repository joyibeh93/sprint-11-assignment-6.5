//let API_KEY='e7ac5db1afc40d248972898a4bbd11e2';
//let city=lagos;


fetch("https://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&APPID=e7ac5db1afc40d248972898a4bbd11e2")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err));