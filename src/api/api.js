const apiKey='9dfb822d11bf48687a7c36e240e5cbe1';

const getWeather = async (city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res)=>res.json())
    .then((json)=>{
        return json;
    })
}

export default getWeather;