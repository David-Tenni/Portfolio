
let x = 0;
setInterval(function(){ 
    if (x <= 5){
        x = x + 1; 

    } else{
        x = 0;
    }
    switch (x){
        case x = 1:
            heart.style.color = "magenta";

            break;
        case x = 2:
            heart.style.color = "maroon";

            break;
        case x = 3:
            heart.style.color = "blue";

            break;
        case x = 4:
            heart.style.color = "green";
            xBox.style.transform = 'rotate(90deg)';

            break;
        case x = 5:
            heart.style.color = "coral";

            break;
        case x = 6:
            heart.style.color = "purple";

            x = 0;
            break;
    default:
        console.log("othercases")
    }
}, 1000);


window.addEventListener('load', (event) => {
    
    let heart = document.getElementById('heart');
    // let xBox = document.getElementById('x-box');
    // let yBox = document.getElementById('y-box');
    // let zBox = document.getElementById('z-box');
    heart.style.color = "magenta";



});



