// get button element from html
const button = document.querySelector("button");
let light = true; // set light to true

// function to change from light to dark and dark to light
const changeMode = () => {
    const title = document.querySelector("title");
    const h1 = document.querySelector("h1");

    if(light){ // if we're in light mode
        // go to dark mode
        title.innerText = "Dark Mode";

        h1.innerText = "Dark Mode";

        button.innerText = "Light Mode";
        
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        light = false;
    }else{ // we are in dark mode
        // go to light mode
        title.innerText = "Light Mode";

        h1.innerText = "Light Mode";

        button.innerText = "Dark Mode";

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        light = true;
    }
    
}


button.addEventListener("click", changeMode);