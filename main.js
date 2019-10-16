// Obtener todos los elementos HTML que abren los articulos, es decir, donde se hace click
var tabsOptions = document.querySelectorAll("#menu a");
// obtiene un elemento HTML, del id indicado en el atributo href del primer elemento del menu
// sirve para obtener la referencia de quien esta en pantalla
var currentDisplay = document.querySelector(tabsOptions[0].getAttribute("href"));


// oculta todos los articulos y agrega los click
tabsOptions.forEach((element) =>{
    // obtiene el elemnto a ocultar (el articulo)
    let content =  document.querySelector(element.getAttribute("href"));
    // oculta el elemento
    content.style.display = "none";

    // agrega el evento 
    element.addEventListener("click",function(){
        currentDisplay.style.display = 'none';
        // 0btiene el id del nuevo elemento a mostrar y el objeto HTML
        currentDisplay = document.querySelector(this.getAttribute("href")); 
        currentDisplay.style.display = 'block';

    });
});

// muestra el elemento por defecto
currentDisplay.style.display = 'block';