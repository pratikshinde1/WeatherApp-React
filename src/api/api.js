const apiKey = '08b74b1f4a9cbc0f2139b00acaa907b0';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city }&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}
 
export default getWeather;