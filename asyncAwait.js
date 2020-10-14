// async --> Declarar una función asíncrona
// await --> indicar, dentro de la función asíncrona, que espere al
//          resultado de una promesa u operación asíncrona

const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>resolve('Hola'), 3000);
        }else{
            reject('No hay saludo');
        }
    });
};

//forma tradiciona apilando llamadas.
helloPromise()
.then()
.then()
.then()
.catch();

//Con async await
const saludar = async() => {//con async le indicamos que va ha ser asincrona
    const resultadoDelSaludo = await helloPromise();//el await hace que espere
    console.log(resultadoDelSaludo);
};

saludar();