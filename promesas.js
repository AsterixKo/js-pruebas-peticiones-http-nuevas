const city = 'Madrid';


// GET --> Obtener información
// POST --> Publicar o enviar información



// Promesa en la que hago una petición http
const getWeatherData = () => {
    return new Promise((resolve, reject) => {

        console.log('dentro de Promise');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + API_KEY + '&units=metric');

        console.log('setTimeout');
        setTimeout(() => {
            xhr.send();
        }, 3000);
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log(`Ha ocurrido un error con codigo ${xhr.status} y mensaje ${xhr.statusText}`);
                reject(`${xhr.status} - ${xhr.statusText}`)
            } else {
                console.log(`Respuesta ${xhr.response}`);
                const parsedResponse = JSON.parse(xhr.response);
                console.log('Respuesta parseada:', parsedResponse);
                resolve(parsedResponse);
            }
        };
    });
}

console.log('llamando a getWeatherData...');
getWeatherData()
    .then(response => {
        console.log('RESPONSE IN', response);
    })
    .catch(error=>{
        error=> console.log(error);
    });