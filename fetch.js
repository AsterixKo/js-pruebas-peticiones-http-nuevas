const getRandomUser = async () => {
    const myRandomUser = await fetch('https://randomuser.me/api/?results=1');
    const userData = await myRandomUser.json();
    console.log('Mi usuario es', userData);
};

getRandomUser();



// //puedo hacer anonimas funciones y poner los await dentro
// async function prueba() {

// }

// prueba();

// const myAnonymousFunction = async function () {

// };