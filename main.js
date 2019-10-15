var tabsOptions = document.querySelectorAll("#menu a");
var currentDisplay = document.querySelector(tabsOptions[0].getAttribute("href"));


tabsOptions.forEach((element) =>{
    
    let content =  document.querySelector(element.getAttribute("href"));
    content.style.display = "none";

    element.addEventListener("click",function(){
        currentDisplay.style.display = 'none';
        currentDisplay = document.querySelector(this.getAttribute("href")); 
        currentDisplay.style.display = 'block';

    });
});

currentDisplay.style.display = 'block';