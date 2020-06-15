// Variables

let listTweets = document.querySelector('#lista-tweets');
// Event Listeners
eventListeners();

function eventListeners(){
    // Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar Tweets
    listTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageLsito);
}




//Funciones

// Añadir tweet del  fromulario
function agregarTweet(e){
    e.preventDefault();
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    const tweet = document.querySelector('#tweet').value;

   

    // Crear boton eliminar

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemto y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listTweets.appendChild(li);

    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
    document.querySelector('#tweet').value = ' ';
}

// Elimina el Tweet del DOM
function borrarTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Mostrar datos de Local Storage en la Lista
function localStorageLsito(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    
    tweets.forEach((tweet)=>{
        // Crear boton eliminar

        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        // Crear elemto y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // Añade el boton de borrar al tweet
        li.appendChild(botonBorrar);
        // añade el tweet a la lista
        listTweets.appendChild(li);
    });
}

// Agregar Tweet a Local Storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en Local Storage, retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    // Revisamos los valores de Local Storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Eliminar tweet de Local Storage

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;

    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, (tweet.length-1));

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet, index)=>{
        if(tweetBorrar == tweet){
                tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}