async function nueva_imagen(){ 
    var response = await fetch("https://dog.ceo/api/breeds/image/random") //espere que la respuesta esté lista
    var responseJson = await response.json();
    var image = responseJson.message; //URL imagen perrito  
    var dogContainer = document.querySelector(".dog_container")
    dogContainer.innerHTML="<img src='"+image+"' alt='perrito' />"
}