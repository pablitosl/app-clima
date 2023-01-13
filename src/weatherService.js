const API_KEY = '3ed61821667659172c04e1d691e667fd'

const makeIconURL = (iconId) => `http://openweathermap.org/img/w/${iconId}.png`

const getWeather = async(city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${API_KEY}&units=${units}`;

    console.log(URL);
    
    const data = await fetch(URL).then((res) => res.json()).then((data) => data);

    const {
        weather,
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind: {speed},
        sys: {country},
        name
    } = data;

    const {description, icon} = weather[0];

    return {
        description, iconURL: makeIconURL(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name
    }
};

export default getWeather;