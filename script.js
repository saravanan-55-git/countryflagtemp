
let container = document.createElement("div");
container.setAttribute("class","container");

let row = document.createElement("div");
row.setAttribute("class","row");

container.append(row);
let res = fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>weather(data));

// let res1=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// .then((res)=>res.json())
// .then((data1)=> tempvalue(data1));

function weather(data)
{
  
    for(let i=0;i<data.length;i++){
        document.body.innerHTML +=
    `<div id="container" class="container">
    <div class="name" id="name"><b>${data[i].name.common}</b></div>
    </br>
    <div class="flag"id="flag">
    <img src="${data[i].flags.png}" class="flag" /></div>
    <div id="info${i}" class="info">
    
    <p>population : ${data[i].population}</p>
    <p>region : ${data[i].region}</p>
    <p>capital : ${data[i].capital}</p>
    <button id = "btn" onclick="fetchweather('${data[i].capital}')" >
    Click for Weather </button>
    
    <p id = 'temp${data[i].capital}'+> Temperature  </p>
            </div>   
    </div>`
    }     
}
const fetchweather = (capital)=>{
    
    try{
    fetch(
        //`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ef655657047c9741f85f1cfcf13c1ede`
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=4ba8d7e12b2edcd47a3cc36246a2b295`
      ).then((res) => res.json())
      .then((data)=>{
        let tempval = data.main.temp;
        console.log("the temperature is............"+tempval)
        let id = "temp"+data.name;
        console.log(id);
        if(tempval!=null){
        document.getElementById(id).innerHTML = tempval;}
      });  
    }
    catch(err){
        console.log(err);
    }
}
    

    // function tempvalue(data1){
//     for(let j = 0;j<data1.length;j++)
//     {
//         document.body.innerHTML +=`
        
//             <div id = "btn">
//         <button id = "btn" onclick="fetchweather('${data1[i].capital}')" >Click for Weather </button>
//     <p id = 'temp${data1.alpha2Code}'+></p> 
    
//     </div>
//     `}  
    
// }
    // console.log(data);
    // for(let i=0;i<data.length;i++){
        //   const contryRequired = {
        //     ...element,
        // name: element.name.common,
        // flag: element.flags.png,
        // population: element.population,
        // region: element.region,
        // capital: element.capital 
        // }
//         document.body.innerHTML +=
//     `<div id="container" class="container">
//     <img src="${data[i].flag}" class="flag" />    
//     <div id="info${i}" class="info">
//     <p>country name: <b>${data[i].name}</b></p>
//     <p>population : ${data[i].population}</p>
//     <p>region : ${data[i].region}</p>
//     <p>capital : ${data[i].capital}</p>
//     </div>    
//     <button id = "btn" onclick="fetchweather('${data[i].capital}')" >Click for Weather</button>
//     <p id="weather"></p>
//     </div>` }
// }).catch((error)=>console.log(error));
        //createcountry(contryRequired)
// function createcountry({name,flag,population,region,capital,temp}){
//     document.body.innerHTML +=
//     `<div id="container" class="container">
//     <img src="${flag}" class="flag" />    
//     <div id="info" class="info">
//     <p>country name: <b>${name}</b></p>
//     <p>population : ${population}</p>
//     <p>region : ${region}</p>
//     <p>capital : ${capital}</p>
//     </div>    
//     <button id = "btn" onclick="fetchweather('${capital}')" >Click for Weather</button>
//     <p id="weather"></p>
//     </div>` 
// }

 